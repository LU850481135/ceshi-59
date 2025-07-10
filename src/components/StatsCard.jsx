// @ts-ignore;
import React from 'react';

export function StatsCard({
  title,
  value
}) {
  return <div className="bg-white p-4 rounded-lg shadow-sm">
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>;
}