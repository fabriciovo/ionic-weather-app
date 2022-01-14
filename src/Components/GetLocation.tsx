import { Geolocation } from "@ionic-native/geolocation";
import { IonButton, IonIcon, IonLoading, IonToast } from "@ionic/react";
import { locateOutline } from "ionicons/icons";
import {  useLayoutEffect, useState } from "react";
import { emptyLocationError, ILocationError } from "../Interfaces/IError";
import { WeatherAPI } from "../utils/api";
interface Props {
  setWeather:any;
}

const GetLocation: React.FC<Props> = ({setWeather}:Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ILocationError>(emptyLocationError);

  useLayoutEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    setLoading(true);
    try {
      const api: WeatherAPI = new WeatherAPI();
      const position = await Geolocation.getCurrentPosition();
      const data = await api.updateForecast(position);
      setError({ showError: false, message: undefined });
      setLoading(false);
      setWeather(data)
    } catch (err: any) {
      setError({
        showError: true,
        message:
          err.message?.length > 0 ? err.message : "Cannot get user location",
      });
      setLoading(false);
    }
  }

  return (
    <>
      <IonButton onClick={getLocation}>
        <IonIcon
          slot="icon-only"
          icon={locateOutline}
          style={{ paddingRight: 8 }}
          size="small"
        />
        Get Location
      </IonButton>
      <IonLoading
        isOpen={loading}
        message={"Getting Location..."}
        onDidDismiss={() => setLoading(false)}
      />
      <IonToast
        isOpen={error.showError}
        message={error?.message}
        duration={3000}
        onDidDismiss={() => setError({ showError: false, message: undefined })}
      />
    </>
  );
};

export default GetLocation;
