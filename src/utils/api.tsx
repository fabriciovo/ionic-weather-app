import { emptyWeather } from "../Interfaces/IWeather";
import dotenv from 'dotenv'

export class WeatherAPI {
  public async updateForecast(position: any) {
    let data = null;
    try {
      data = await this.getForecast(position.coords);
    } catch (e) {
      data = this.getErrorData();
    }
    return data;
  }

  private async getForecast(coordinates: any) {
    const appId = "40ac787c83b2118dc28ff0eda09e5d95"
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${appId}&units=metric`;
    const response = await fetch(endpoint);
    return await response.json();
  }

  private getErrorData() {
    return emptyWeather;
  }

}
