export interface IWheater {
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

export const emptyWeather = {
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
};
