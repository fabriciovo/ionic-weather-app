import "./Weather.css";
import { IonWeatherPage } from "./Style";
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
        <strong className="city">
          {name} | {country}
        </strong>
        <p>{weather[0].description}</p>
        <p className="temp">
          {temp}
          <span>c</span>
        </p>
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <div>
                <p className="minTemp">
                  {temp_min}
                  <span>c</span>
                </p>
                <p className="text">min</p>
              </div>
            </IonCol>
            <IonCol size="6">
              <div>
                <p className="maxTemp">
                  {temp_max}
                  <span>c</span>
                </p>
                <p className="text">max</p>
              </div>
            </IonCol>
            <IonCol size="12">
              <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              />
            </IonCol>
            <IonCol size="12">
              <IonIcon
                slot="icon-only"
                icon={locateOutline}
                style={{ paddingRight: 16 }}
              />
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
              <IonButton onClick={getLocation}>Get Location</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

      </div>
    </IonWeatherPage>
  );
};

export default Weather;
