
import React from 'react';
import WeatherCard from './WeatherCard';
import { 
  Thermometer, 
  Droplets, 
  CloudRain, 
  Cloud, 
  Wind, 
  Eye, 
  CloudSnow,
  Gauge
} from 'lucide-react';

// Mock weather data structure - this will be replaced with actual API data
interface WeatherData {
  temperature: number;
  relativeHumidity: number;
  apparentTemperature: number;
  probabilityOfPrecipitation: number;
  precipitation: number;
  rain: number;
  snowfall: number;
  seaLevelPressure: number;
  cloudCover: number;
  windSpeed: number;
  windGusts: number;
  visibility: number;
}

interface WeatherDashboardProps {
  weatherData?: WeatherData;
}

const WeatherDashboard: React.FC<WeatherDashboardProps> = ({ weatherData }) => {
  // Mock data for demonstration - replace with actual API data
  const defaultData: WeatherData = {
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
    visibility: 10
  };

  const data = weatherData || defaultData;

  const weatherMetrics = [
    {
      title: 'Temperature',
      value: data.temperature,
      unit: '°C',
      icon: Thermometer,
      description: 'Current air temperature'
    },
    {
      title: 'Apparent Temperature',
      value: data.apparentTemperature,
      unit: '°C',
      icon: Thermometer,
      description: 'Feels like temperature'
    },
    {
      title: 'Relative Humidity',
      value: data.relativeHumidity,
      unit: '%',
      icon: Droplets,
      description: 'Moisture in the air'
    },
    {
      title: 'Precipitation Probability',
      value: data.probabilityOfPrecipitation,
      unit: '%',
      icon: CloudRain,
      description: 'Chance of precipitation'
    },
    {
      title: 'Precipitation',
      value: data.precipitation,
      unit: 'mm',
      icon: CloudRain,
      description: 'Total precipitation'
    },
    {
      title: 'Rain',
      value: data.rain,
      unit: 'mm',
      icon: CloudRain,
      description: 'Rainfall amount'
    },
    {
      title: 'Snowfall',
      value: data.snowfall,
      unit: 'mm',
      icon: CloudSnow,
      description: 'Snow accumulation'
    },
    {
      title: 'Sea Level Pressure',
      value: data.seaLevelPressure,
      unit: 'hPa',
      icon: Gauge,
      description: 'Atmospheric pressure'
    },
    {
      title: 'Cloud Cover',
      value: data.cloudCover,
      unit: '%',
      icon: Cloud,
      description: 'Sky coverage'
    },
    {
      title: 'Wind Speed',
      value: data.windSpeed,
      unit: 'km/h',
      icon: Wind,
      description: 'Current wind speed'
    },
    {
      title: 'Wind Gusts',
      value: data.windGusts,
      unit: 'km/h',
      icon: Wind,
      description: 'Maximum wind gusts'
    },
    {
      title: 'Visibility',
      value: data.visibility,
      unit: 'km',
      icon: Eye,
      description: 'Visual range'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Weather Dashboard</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time weather conditions and atmospheric data at your location
          </p>
          <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: '#C4E1E6' }}>
            <p className="text-sm text-gray-700 font-medium">
              Last updated: {new Date().toLocaleString()}
            </p>
          </div>
        </div>

        {/* Weather Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {weatherMetrics.map((metric, index) => (
            <WeatherCard
              key={index}
              title={metric.title}
              value={metric.value}
              unit={metric.unit}
              icon={metric.icon}
              description={metric.description}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#C4E1E6' }}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Ready for API Integration</h3>
            <p className="text-sm text-gray-700">
              Replace the mock data in WeatherDashboard component with your weather API data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
