
import React from 'react';

const WeatherCard = ({ title, value, unit, icon: Icon, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-md mr-4" style={{ backgroundColor: '#C4E1E6' }}>
              <Icon className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          </div>
          <div className="flex items-baseline space-x-2 mb-2">
            <span className="text-3xl font-bold text-gray-900">{value}</span>
            <span className="text-lg font-medium text-gray-500">{unit}</span>
          </div>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
