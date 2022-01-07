import "./Home.css";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Weather from "../components/Wheater";


const backgroundType = {
  "clear sky": "Blue",
  "few clouds": "Blue",
  "scattered clouds": "Blue",
  "broken clouds": "Blue",
  "shower rain": "Blue",
  rain: "Blue",
  snow: "Blue",
  thunderstorm: "Blue",
  mist: "Blue",
};



const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="clearSky">
        <Weather />
      </IonContent>
    </IonPage>
  );
};

export default Home;
