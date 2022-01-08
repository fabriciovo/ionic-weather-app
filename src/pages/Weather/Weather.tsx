import "./Weather.css";
import { IonWeatherPage, TempText } from "./Style";
import { updateForecast } from "../../utils/api";
import { useLayoutEffect, useState } from "react";
import {
  IonCol,
  IonGrid,
  IonRow,
  IonIcon,
  IonButton,
  IonToast,
  IonLoading,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonLabel,
} from "@ionic/react";
import { locateOutline } from "ionicons/icons";
import { Geolocation } from "@ionic-native/geolocation";

const backgroundType: any = {
  "clear sky": "linear-gradient(#4F4F4F, #959595)",
  "few clouds": "linear-gradient(#108DC7, #EF8E38)",
  "scattered clouds": "linear-gradient(#4F4F4F, #959595)",
  "broken clouds": "linear-gradient(#4F4F4F, #959595)",
  "shower rain": "linear-gradient(#4F4F4F, #959595)",
  rain: "linear-gradient(#4F4F4F, #959595)",
  snow: "linear-gradient(#4F4F4F, #959595)",
  thunderstorm: "linear-gradient(#4F4F4F, #959595)",
  mist: "linear-gradient(#4F4F4F, #959595)",
};

interface LocationError {
  showError: boolean;
  message?: string;
}

interface Wheater {
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
  sys: {
    country: string;
  };
}

const Weather: React.FC = () => {
  const [
    {
      name,
      main: { temp, temp_max, temp_min },
      weather,
      sys: { country },
    },
    setWeather,
  ] = useState<Wheater>({
    name: "",
    coord: {
      lon: 0,
      lat: 0,
    },
    main: {
      temp: 0,
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp_max: 0,
      temp_min: 0,
    },
    weather: [
      {
        description: "",
        icon: "",
        main: "",
      },
    ],
    sys: {
      country: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<LocationError>({
    showError: false,
    message: undefined,
  });

  useLayoutEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    setLoading(true);
    try {
      const position = await Geolocation.getCurrentPosition();
      const data = await updateForecast(position);
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
      <div className="container">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              {name} | {country}
            </IonCardTitle>
            <IonCardSubtitle style={{ margin: 8 }}>
              {weather[0].description}
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="12">{temp.toFixed(0)}</IonCol>
                <IonCol size="6">{temp_min.toFixed(0)}</IonCol>
                <IonCol size="6">{temp_max.toFixed(0)}</IonCol>
                <IonCol size="12">
                  <img
                    src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  />
                </IonCol>
                <IonCol size="12">
                  <IonButton onClick={getLocation}>
                    <IonIcon
                      slot="icon-only"
                      icon={locateOutline}
                      style={{ paddingRight: 8 }}
                      size="small"
                    />
                    Get Location
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
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
      </div>
    </IonWeatherPage>
  );
};

export default Weather;
