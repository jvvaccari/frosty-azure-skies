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
  const [alerts, setAlerts] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  const fetchData = async () => {
    try {
      const [weatherRes, alertsRes] = await Promise.all([
        fetch("http://localhost:8081/weather/data"),
        fetch("http://localhost:8081/weather/alerts"),
      ]);

      if (!weatherRes.ok || !alertsRes.ok) {
        throw new Error("Erro ao buscar dados da API");
      }

      const weatherData = await weatherRes.json();
      const weatherAlert = await alertsRes.json();

      setData(weatherData);
      setAlerts(weatherAlert);
      setFetchError(null);

      setLastUpdate(new Date());
    } catch (err) {
      setFetchError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 30000);
    return () => clearInterval(intervalId);
  }, []);

  if (!data || !alerts) return null;

  if (fetchError) {
    console.error(fetchError);
  }

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

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          padding: "12px",
          backgroundColor: "#4a90e2",
          marginBottom: 30,
        }}
      >
        <h1 style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}>
          Weather Dashboard
        </h1>
      </div>

      {lastUpdate && (
        <p
          style={{
            textAlign: "center",
            marginBottom: 20,
            color: "#666",
            fontSize: 18,
          }}
        >
          Última atualização: {lastUpdate.toLocaleDateString()}{" "}
          {lastUpdate.toLocaleTimeString()}
        </p>
      )}

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
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px 20px",
          backgroundColor: "#4a90e2",
          color: "#fff",
          fontSize: "18px",
          border: "none",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          margin: "30px auto 0",
          transition: "background-color 0.3s ease",
          maxWidth: "300px",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#357ABD")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4a90e2")}
      >
        Histórico do Clima
      </button>
    </div>
  );
};

export default WeatherDashboard;
