import WeatherCard from "./WeatherCard";
import { useLocation } from "react-router-dom";
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

const WeatherDashboard = ({ data, alerts, lastUpdate }) => {
  const metrics = [
    {
      title: "Temperatura",
      value: data.temperature,
      unit: "°C",
      icon: Thermometer,
    },
    {
      title: "Sensação Térmica",
      value: data.apparentTemperature,
      unit: "°C",
      icon: Thermometer,
    },
    {
      title: "Umidade",
      value: data.relativeHumidity,
      unit: "%",
      icon: Droplets,
    },
    {
      title: "Chance de Chuva",
      value: data.probabilityOfPrecipitation,
      unit: "%",
      icon: CloudRain,
    },
    {
      title: "Precipitação",
      value: data.precipitation,
      unit: "mm",
      icon: CloudRain,
    },
    { title: "Chuva", value: data.rain, unit: "mm", icon: CloudRain },
    { title: "Neve", value: data.snowfall, unit: "mm", icon: CloudSnow },
    {
      title: "Pressão",
      value: data.seaLevelPressure,
      unit: "hPa",
      icon: Gauge,
    },
    { title: "Nuvens", value: data.cloudCover, unit: "%", icon: Cloud },
    { title: "Vento", value: data.windSpeed, unit: "m/s", icon: Wind },
    {
      title: "Rajada de Vento",
      value: data.windGusts,
      unit: "m/s",
      icon: Wind,
    },
    { title: "Visibilidade", value: data.visibility, unit: "km", icon: Eye },
  ];

  const location = useLocation();

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <header
        style={{
          padding: "16px",
          background: "linear-gradient(90deg, #4a90e2 60%, #357ab8 100%)",
          marginBottom: 32,
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(74,144,226,0.08)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#fff",
            fontWeight: 700,
            letterSpacing: 1,
            fontSize: 24,
            margin: 0,
          }}
        >
          {location.pathname === "/" ? "Weather Dashboard" : "Histórico do Clima"}
        </h1>
      </header>

      {lastUpdate && (
        <p
          style={{
            textAlign: "center",
            marginBottom: 24,
            color: "#4a90e2",
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: 0.5,
          }}
        >
          Última atualização:{" "}
          <span style={{ fontWeight: 700 }}>
            {lastUpdate.toLocaleDateString()} {lastUpdate.toLocaleTimeString()}
          </span>
        </p>
      )}

      <main>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {metrics.map((metric, index) => (
            <WeatherCard
              key={index}
              title={metric.title}
              value={metric.value}
              unit={metric.unit}
              icon={metric.icon}
              alert={alerts[metric.title]}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default WeatherDashboard;
