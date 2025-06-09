
import React from 'react';

const WeatherCard = ({ title, value, unit, icon: Icon, description }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-3">
        <div className="p-2 rounded-md" style={{ backgroundColor: '#C4E1E6' }}>
          <Icon className="w-5 h-5 text-gray-700" />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide">{title}</h3>
        <div className="flex items-baseline space-x-1">
          <span className="text-xl font-bold text-gray-900">{value}</span>
          <span className="text-xs font-medium text-gray-500">{unit}</span>
        </div>
        {description && (
          <p className="text-xs text-gray-500 leading-tight">{description}</p>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
