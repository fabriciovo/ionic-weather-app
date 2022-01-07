import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import { IonButton, IonLoading, IonToast } from "@ionic/react";
import { updateForecast } from "../utils/api";

interface LocationError {
  showError: boolean;
  message?: string;
}

interface Weather {
  description: string;
}

interface Main {
  humidity: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface data {
  clouds: any;
  wind: any;
  sys: any;
  Weather: Array<Weather>;
  main: Main;
  name: string;
}

const GeolactionButton: React.FC<any> = ({setData}, ref) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<LocationError>({
    showError: false,
    message: undefined,
  });



  const getLocation = async () => {
    setLoading(true);
    try {
      const position = await Geolocation.getCurrentPosition();
      const data = await updateForecast(position);
      setError({ showError: false, message: undefined });
      setLoading(false);
      setData(data);
    } catch (err: any) {
      setError({
        showError: true,
        message:
          err.message?.length > 0 ? err.message : "Cannot get user location",
      });
      setLoading(false);
    }
  };

  return (
    <>
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
      <IonButton onClick={getLocation}>Get Location</IonButton>
    </>
  );
};

export default GeolactionButton;
