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

  if (isLoading) return <p style={{ textAlign: "center", marginTop: 40 }}>Carregando dados do tempo...</p>;
  if (fetchError) return <p style={{ textAlign: "center", marginTop: 40, color: "red" }}>Erro: {fetchError}</p>;

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
    <div
      style={{
        maxWidth: 1200,
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 30, color: "#333" }}>
        Weather Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {metrics.map((metric, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <metric.icon size={36} color="#4a90e2" />
            <h3 style={{ margin: "12px 0 8px", color: "#222" }}>{metric.title}</h3>
            <p style={{ fontSize: 24, fontWeight: "bold", margin: 0, color: "#111" }}>
              {metric.value} {metric.unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDashboard;
