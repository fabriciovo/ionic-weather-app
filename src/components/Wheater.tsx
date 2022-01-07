import "./Weather.css";
import { getWeatherByCity, teste } from "../utils/api";
import { useEffect } from "react";
import {
  IonCol,
  IonGrid,
  IonRow,
  IonIcon,
} from "@ionic/react";
import { locateOutline } from "ionicons/icons";

interface ContainerProps {}

function convertTemp(temp: number) {
  return (temp - 273.15).toFixed(0);
}



const Weather: React.FC<ContainerProps> = () => {
  const { weather, main } = teste;

  useEffect(() => {
    getWeatherByCity("Farroupilha", 55, "RS");
  }, []);

  return (
    <div className="container">
      <strong className="city">Cidade | Estado</strong>
      <p>{weather[0].description}</p>
      <p className="temp">
        {convertTemp(main.temp)}
        <span>c</span>
      </p>
      <IonGrid>
        <IonRow>
          <IonCol size="6">
            <div>
              <p className="minTemp">
                {convertTemp(main.temp_min)} <span>c</span>
              </p>
              <p className="text">min</p>
            </div>
          </IonCol>
          <IonCol size="6">
            <div>
              <p className="maxTemp">
                {convertTemp(main.temp_max)}
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
            <a onClick={() => {}} style={{ cursor: "pointer" }}>
              FIND MY LOCATION
            </a>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default Weather;
