const WeatherCard = ({ title, value, unit, icon: Icon }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "1rem", 
        borderRadius: "0.5rem", 
        border: "1px solid #E5E7EB",
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.2s ease-in-out",
        cursor: "default",
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)")} 
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)")}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem", 
          marginBottom: "0.75rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#DBEAFE",
            color: "#2563EB", 
            padding: "0.5rem", 
            borderRadius: "0.375rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon style={{ width: "1.25rem", height: "1.25rem" }} />
        </div>
        <h3
          style={{
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "#4B5563",
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>
      <div
        style={{
          fontSize: "1.25rem", 
          fontWeight: "700", 
          color: "#111827", 
        }}
      >
        {value}{" "}
        <span
          style={{
            fontSize: "0.875rem", 
            fontWeight: "400", 
            color: "#6B7280", 
          }}
        >
          {unit}
        </span>
      </div>
    </div>
  );
};

export default WeatherCard;
