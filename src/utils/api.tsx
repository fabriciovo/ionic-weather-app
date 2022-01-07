interface WeatherAPI {
  
}


class WeatherAPI {
  constructor(){

  }
}


export const getWeatherByCity = (cityName:any, stateCode:any, countryCode:any) => {
  fetch(
    `api.openweathermap.org/data/2.5/weather?q=Farroupilha&appid=40ac787c83b2118dc28ff0eda09e5d95`
  )
    .then((response:any) => JSON.parse(response.data))
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
};

export const teste = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 16093,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: "US",
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: "Mountain View",
  cod: 200,
};

async function getForecast(coordinates:any) {
  const appId = "40ac787c83b2118dc28ff0eda09e5d95";
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${appId}&units=metric`;
  const response = await fetch(endpoint);
  return await response.json();
}

export async function updateForecast(position:any) {
  console.log(position)
  let data = null;
  try {
    data = await getForecast(position.coords);
  } catch (e) {
    data = getErrorData();
  }
  console.log(data)
  return data
}

function getErrorData() {
  return {
          clouds: { all: 0 },
          wind: { speed: 0 },
          main: {
              humidity: 0,
              temp: 0,
              temp_max: 0,
              temp_min: 0,
          },
          weather: [
              {
                  id: 0,
                  description: `There's a problem at the weather forecast server ¯\\_(ツ)_/¯`
              }
          ],
          name: null,
          sys: {
              country: null
          }
      };
}