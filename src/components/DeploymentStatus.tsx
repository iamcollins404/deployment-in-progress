import { getCurrentStage } from '../utils/deploymentStages';

interface DeploymentStatusProps {
  percentage: number;
}

export function DeploymentStatus({ percentage }: DeploymentStatusProps) {
  const currentStage = getCurrentStage(percentage);
  
  return (
    <div className="bg-white/5 rounded-lg p-4 mt-4">
      <div className="flex flex-col space-y-2">
        <div className="text-lg font-medium text-white">
          {currentStage.message}
        </div>
        {currentStage.detail && (
          <div className="text-sm text-gray-400">
            {currentStage.detail}
          </div>
        )}
      </div>
    </div>
  );
}