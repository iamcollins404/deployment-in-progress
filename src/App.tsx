import React, { useState, useEffect } from 'react';
import { ProgressDisplay } from './components/ProgressDisplay';
import { calculateDeploymentProgress } from './utils/timeCalculator';

function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      setPercentage(calculateDeploymentProgress());
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-2xl px-6 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Deployment in Progress</h1>
            <p className="text-gray-400 text-lg">Taking longer than usual...</p>
          </div>
          <ProgressDisplay percentage={percentage} />
        </div>
      </div>
    </div>
  );
}

export default App;