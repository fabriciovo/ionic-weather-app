import { IonContent } from "@ionic/react";
import styled from "styled-components";

export const IonWeatherPage = styled(IonContent)(
  ({ color }) => `
  --ion-background-color: ${color};`
);

export const TempText = styled("div")``;
