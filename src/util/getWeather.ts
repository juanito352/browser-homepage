import type { Weather } from "../types/Weather";

export async function getWeather(lat: number, long: number): Promise<Weather> {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`;
  const res = await fetch(apiURL, { method: "GET" });
  const resBody = await res.json();

  return {
    place: resBody.name,
    weather: resBody.weather[0].main,
    desc: resBody.weather[0].description,
    iconURL: `https://openweathermap.org/img/wn/${resBody.weather[0].icon}@2x.png`,
    temp: Math.round(resBody.main.temp - 273.15),
    feelsLike: Math.round(resBody.main.feels_like - 273.15),
    humidity: resBody.main.humidity,
    windSpeed: resBody.wind.speed,
  };
}
