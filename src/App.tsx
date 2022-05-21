import { IonApp, IonPage, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Theme variables */
import "./theme/variables.css";
import Weather from "./pages/Weather/Weather";
import React from "react";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <Weather />
    </IonPage>
  </IonApp>
);

export default App;
