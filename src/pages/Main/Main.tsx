import {
  IonPage,
} from "@ionic/react";
import Weather from "../Weather/Weather";

const Home: React.FC = () => {
  return (
    <IonPage>
        <Weather />
    </IonPage>
  );
};

export default Home;
