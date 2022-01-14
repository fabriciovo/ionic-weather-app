import {
  IonWeatherPage,
  TempText,
  Container,
  SubTempText,
  DescriptionText,
  CityText,
  Celcius,
} from "./Style";
import { useState } from "react";
import {
  IonCol,
  IonGrid,
  IonRow,

} from "@ionic/react";
import { emptyWeather, IWheater } from "../../Interfaces/IWeather";
import { backgroundType } from "../../utils/utils";
import GetLocation from "../../Components/GetLocation";

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
              <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              />
            </IonCol>
          </IonRow>
        </IonGrid>

        <GetLocation setWeather={setWeather}/>
      </Container>
    </IonWeatherPage>
  );
};

export default Weather;
