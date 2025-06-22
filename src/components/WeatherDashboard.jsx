import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import {
  Thermometer,
  Droplets,
  CloudRain,
  Cloud,
  Wind,
  Eye,
  CloudSnow,
  Gauge,
} from "lucide-react";

const WeatherDashboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/weather")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar dados da API");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setIsLoading(false);
      })
      .catch((err) => {
        setFetchError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Carregando dados do tempo...</p>;
  if (fetchError) return <p>Erro: {fetchError}</p>;

  const metrics = [
    { title: "Temperatura", value: data.temperature, unit: "°C", icon: Thermometer },
    { title: "Sensação Térmica", value: data.apparentTemperature, unit: "°C", icon: Thermometer },
    { title: "Umidade", value: data.relativeHumidity, unit: "%", icon: Droplets },
    { title: "Chance de Chuva", value: data.probabilityOfPrecipitation, unit: "%", icon: CloudRain },
    { title: "Precipitação", value: data.precipitation, unit: "mm", icon: CloudRain },
    { title: "Chuva", value: data.rain, unit: "mm", icon: CloudRain },
    { title: "Neve", value: data.snowfall, unit: "mm", icon: CloudSnow },
    { title: "Pressão", value: data.seaLevelPressure, unit: "hPa", icon: Gauge },
    { title: "Nuvens", value: data.cloudCover, unit: "%", icon: Cloud },
    { title: "Vento", value: data.windSpeed, unit: "km/h", icon: Wind },
    { title: "Ráfagas de Vento", value: data.windGusts, unit: "km/h", icon: Wind },
    { title: "Visibilidade", value: data.visibility, unit: "km", icon: Eye },
  ];

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        {metrics.map((metric, index) => (
          <WeatherCard
            key={index}
            title={metric.title}
            value={metric.value}
            unit={metric.unit}
            icon={metric.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherDashboard;
