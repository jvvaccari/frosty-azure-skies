import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import WeatherDashboard from "@/components/WeatherDashboard";

const LiveWeather = () => {
  const [data, setData] = useState(null);
  const [alerts, setAlerts] = useState({});
  const [fetchError, setFetchError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const [weatherRes, alertsRes] = await Promise.all([
        fetch("http://localhost:8081/weather/data"),
        fetch("http://localhost:8081/weather/alerts"),
      ]);

      const weatherData = await weatherRes.json();

      const weatherAlert =
        alertsRes.status === 204 || !alertsRes.ok ? {} : await alertsRes.json();

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
    const intervalId = setInterval(fetchData, 32000);
    return () => clearInterval(intervalId);
  }, []);

  if (!data) return null;

  if (fetchError) {
    console.error(fetchError);
  }

  const dowloadHistoryWeather = async () => {
    try {
      const response = await fetch("http://localhost:8087/history/download");
      if (!response.ok) {
        throw new Error("Falha ao baixar o arquivo");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "weather-history.json";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro ao baixar histórico:", error);
    }
  };

  return (
    <div>
      <Outlet />
      {location.pathname === "/" && (
        <>
          <WeatherDashboard
            data={data}
            alerts={alerts}
            lastUpdate={lastUpdate}
          />

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
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#357ABD")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#4a90e2")
            }
            onClick={() => dowloadHistoryWeather()}
          >
            Histórico do Clima
          </button>
        </>
      )}
    </div>
  );
};

export default LiveWeather;
