
import React from "react";

const MapPlaceholder: React.FC = () => {
  return (
    <div className="bg-forest-100 rounded-lg overflow-hidden h-96">
      {/* This would be replaced with an actual map component */}
      <div className="w-full h-full flex items-center justify-center bg-forest-200">
        <p className="text-forest-700 text-lg font-medium">Interactive Map Would Go Here</p>
      </div>
    </div>
  );
};

export default MapPlaceholder;
