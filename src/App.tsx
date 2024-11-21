import React, { useState, useEffect } from 'react';
import { Timer, Loader2 } from 'lucide-react';

function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2024-11-22T12:00:00+02:00'); // Zimbabwe is UTC+2
    
    const calculateProgress = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      const totalHours = diff / (1000 * 60 * 60);
      
      // Calculate percentage (assuming 24 hours total deployment time)
      const progress = Math.min(100, Math.max(0, (24 - totalHours) / 24 * 100));
      setPercentage(progress);
    };

    calculateProgress();
    const interval = setInterval(calculateProgress, 1000);

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

          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Timer className="w-6 h-6" />
                <span className="text-xl font-semibold">Estimated Progress</span>
              </div>
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>

            <div className="mb-8">
              <div className="text-center p-6 bg-white/5 rounded-lg">
                <div className="text-5xl font-bold">{Math.round(percentage)}%</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="w-full bg-white/10 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;