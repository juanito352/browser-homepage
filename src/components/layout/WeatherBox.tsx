import { useEffect, useState } from "react";
import type { Weather } from "../../types/Weather";
import { getWeather } from "../../util/getWeather";

export default function WeatherBox() {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const long = pos.coords.longitude;
          const weatherData = await getWeather(lat, long);
          setWeather(weatherData);
        },
        (err) => console.warn(err)
      );
    };

    fetchWeather();
  }, []);

  if (!weather) return <></>;

  return (
    <div className="bg-transparent rounded-lg w-fit p-3 backdrop-blur-sm m-2 shadow-lg shadow-black/30 scale-90 hidden md:block">
        <h1 className="text-2xl font-bold">{weather.place}</h1>
        <div className="flex">
            <img src={weather.iconURL} alt={weather.desc} />
            <div>
                <p className="text-2xl m-1">Temperature: {weather.temp}&deg;C</p>
                <p className="text-xl m-1">Feels like {weather.feelsLike}&deg;C</p>
            </div>
        </div>
        <p className="text-xl">{weather.weather}: {weather.desc}</p>
        <p className="text-xl">Humidity: {weather.humidity} %</p>
        <p className="text-xl">Wind speed: {weather.windSpeed} m/s</p>
    </div>
  );
}
