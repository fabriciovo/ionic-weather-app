import { IonCard, IonContent } from "@ionic/react";
import styled from "styled-components";

export const IonWeatherPage = styled(IonContent)(
  ({ color }) => `
  --ion-background-color: ${color};`
);

export const Container = styled("div")`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  ion-card {
    display: inline-block;
    width: 90vw;
    height: 90vh;
    max-width: 456px;
  }

  span {
    font-size: 18px
  }
`;

export const CityText = styled("div")`
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

export const DescriptionText = styled("div")`
  font-size: 16px;
  color:white
  font-weight: lighter;
  margin:8px;

`;

export const TempText = styled("div")`
  font-size: 64px;
  color:white
  margin:24px;
  margin-top:48px;
`;

export const SubTempText = styled("div")`
  font-size: 32px;
  color: white;

`;

export const Celcius = styled("span")`
  vertical-align: text-top;
  margin-left: 5px;
`;
