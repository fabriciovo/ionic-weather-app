import {
  IonWeatherPage,
  TempText,
  Container,
  SubTempText,
  DescriptionText,
  CityText,
  Celcius,
} from "./Style";
import { WeatherAPI } from "../../utils/api";
import { useLayoutEffect, useState } from "react";
import {
  IonCol,
  IonGrid,
  IonRow,
  IonIcon,
  IonButton,
  IonToast,
  IonLoading,
} from "@ionic/react";
import { locateOutline } from "ionicons/icons";
import { Geolocation } from "@ionic-native/geolocation";
import { emptyWeather, IWheater } from "../../Interfaces/IWeather";
import { emptyLocationError, ILocationError } from "../../Interfaces/IError";
import { backgroundType } from "../../utils/utils";

const Weather: React.FC = () => {
  const [
    {
      name,
      main: { temp, temp_max, temp_min },
      weather,
      sys: { country },
    },
    setWeather,
  ] = useState<IWheater>(emptyWeather);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ILocationError>(emptyLocationError);

  useLayoutEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    setLoading(true);
    try {
      const api:WeatherAPI = new WeatherAPI()
      const position = await Geolocation.getCurrentPosition();
      const data = await api.updateForecast(position);
      setError({ showError: false, message: undefined });
      setLoading(false);
      setWeather(data);
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
    <IonWeatherPage fullscreen color={backgroundType[weather[0].description]}>
      <Container>
        <CityText>
          {name} | {country}
        </CityText>
        <DescriptionText>{weather[0].description}</DescriptionText>
        <IonGrid>
          <IonRow>
            <IonCol size="12" style={{ height: "16vh" }}>
              <TempText>
                {temp.toFixed(0)}
                <Celcius>c</Celcius>
              </TempText>
            </IonCol>
            <IonCol size="6" style={{ height: "16vh" }}>
              <SubTempText>
                {temp_min.toFixed(0)}
                <Celcius>c</Celcius>
                <span>min</span>
              </SubTempText>
            </IonCol>
            <IonCol size="6" style={{ height: "16vh" }}>
              <SubTempText>
                {temp_max.toFixed(0)}
                <Celcius>c</Celcius>
                <span>max</span>
              </SubTempText>
            </IonCol>
            <IonCol size="12" style={{ height: "16vh" }}>
              <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />
            </IonCol>
          </IonRow>
        </IonGrid>
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
          onDidDismiss={() =>
            setError({ showError: false, message: undefined })
          }
        />
      </Container>
    </IonWeatherPage>
  );
};

export default Weather;
