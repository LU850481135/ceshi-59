// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { ChevronRight } from 'lucide-react';

export function FeatureItem({
  icon,
  title
}) {
  return <div className="p-4 border-b border-gray-100 flex items-center justify-between">
      <div className="flex items-center">
        {icon}
        <span className="ml-3">{title}</span>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </div>;
}