import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import WeatherDashboard from "@/components/WeatherDashboard";

const HistoryWeather = () => {
  const [data, setData] = useState(null);
  const [alerts, setAlerts] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8081/weather/history");

      if (!res.ok) throw new Error("Erro ao buscar histórico do clima.");

      const result = await res.json();
      setData(result.data || null);
      setAlerts(result.alerts || {});
      setLastUpdate(result.dataUpdateTime ? new Date(result.dataUpdateTime) : null);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (fetchError) {
    console.error(fetchError);
    return (
      <p style={{ color: "red", textAlign: "center" }}>
        Erro ao carregar dados históricos.
      </p>
    );
  }

  if (!data)
    return (
      <p style={{ textAlign: "center" }}>Carregando dados históricos...</p>
    );

  return (
    <div>
      <WeatherDashboard data={data} alerts={alerts} lastUpdate={lastUpdate} />
      <Outlet />
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
        onClick={() => navigate("/")}
      >
        Ao vivo
      </button>
    </div>
  );
};

export default HistoryWeather;
