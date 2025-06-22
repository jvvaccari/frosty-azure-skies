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

const WeatherDashboard = ({ weatherData }) => {
  const defaultData = {
    temperature: 24,
    relativeHumidity: 65,
    apparentTemperature: 27,
    probabilityOfPrecipitation: 30,
    precipitation: 0.5,
    rain: 0.3,
    snowfall: 0,
    seaLevelPressure: 1013.2,
    cloudCover: 45,
    windSpeed: 12,
    windGusts: 18,
    visibility: 10,
  };

  const data = weatherData || defaultData;

  const metrics = [
    { title: "Temperature", value: data.temperature, unit: "°C", icon: Thermometer },
    { title: "Feels Like", value: data.apparentTemperature, unit: "°C", icon: Thermometer },
    { title: "Humidity", value: data.relativeHumidity, unit: "%", icon: Droplets },
    { title: "Rain Chance", value: data.probabilityOfPrecipitation, unit: "%", icon: CloudRain },
    { title: "Precipitation", value: data.precipitation, unit: "mm", icon: CloudRain },
    { title: "Rain", value: data.rain, unit: "mm", icon: CloudRain },
    { title: "Snowfall", value: data.snowfall, unit: "mm", icon: CloudSnow },
    { title: "Pressure", value: data.seaLevelPressure, unit: "hPa", icon: Gauge },
    { title: "Clouds", value: data.cloudCover, unit: "%", icon: Cloud },
    { title: "Wind Speed", value: data.windSpeed, unit: "km/h", icon: Wind },
    { title: "Wind Gusts", value: data.windGusts, unit: "km/h", icon: Wind },
    { title: "Visibility", value: data.visibility, unit: "km", icon: Eye },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F9FAFB", // equivalente a bg-gray-50
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "72rem", 
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <header style={{ marginBottom: "2.5rem", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1F2937", 
            }}
          >
            Weather Dashboard
          </h1>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#4B5563", 
            }}
          >
            Up-to-date atmospheric and climate data
          </p>
          <p
            style={{
              fontSize: "0.75rem", 
              marginTop: "0.5rem",
              color: "#9CA3AF", 
            }}
          >
            Last updated: {new Date().toLocaleString()}
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
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
    </div>
  );
};

export default WeatherDashboard;
