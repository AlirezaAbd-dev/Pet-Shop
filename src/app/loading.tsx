import React from 'react';

const Loading = () => {
  return (
    <div className="w-full">
      <div className="w-full h-1 bg-secondary-500/10 overflow-hidden">
        <div className="progress-bar-value w-full h-full bg-secondary-500"></div>
      </div>
    </div>
  );
};

export default Loading;
