import { Timer, Loader2 } from 'lucide-react';
import { DeploymentStatus } from './DeploymentStatus';

interface ProgressDisplayProps {
  percentage: number;
}

export function ProgressDisplay({ percentage }: ProgressDisplayProps) {
  return (
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

      <DeploymentStatus percentage={percentage} />
    </div>
  );
}