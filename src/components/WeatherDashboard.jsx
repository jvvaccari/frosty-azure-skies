
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

const WeatherDashboard = ({ weatherData }) => {
  // Mock data for demonstration - replace with actual API data
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
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Weather Dashboard</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Real-time weather conditions and atmospheric data at your location
          </p>
          <div className="mt-4 inline-block p-3 rounded-lg" style={{ backgroundColor: '#C4E1E6' }}>
            <p className="text-sm text-gray-700 font-medium">
              Last updated: {new Date().toLocaleString()}
            </p>
          </div>
        </div>

        {/* Weather Grid - Single column layout like in the image */}
        <div className="grid grid-cols-1 gap-6 mb-8 max-w-2xl mx-auto">
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
        <div className="text-center">
          <div className="inline-block p-4 rounded-lg" style={{ backgroundColor: '#C4E1E6' }}>
            <h3 className="text-base font-semibold text-gray-800 mb-2">Ready for API Integration</h3>
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
