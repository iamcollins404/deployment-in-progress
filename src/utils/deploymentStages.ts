interface DeploymentStage {
  percentage: number;
  message: string;
  detail?: string;
}

export const deploymentStages: DeploymentStage[] = [
  { percentage: 0, message: "Initializing deployment process", detail: "Setting up build environment" },
  { percentage: 5, message: "Analyzing dependencies", detail: "Checking package versions" },
  { percentage: 15, message: "Building application", detail: "Compiling source code" },
  { percentage: 25, message: "Running tests", detail: "Executing test suites" },
  { percentage: 35, message: "Optimizing assets", detail: "Minifying and bundling" },
  { percentage: 45, message: "Performing security checks", detail: "Scanning dependencies" },
  { percentage: 55, message: "Preparing deployment", detail: "Configuring server" },
  { percentage: 65, message: "Deploying to staging", detail: "Running pre-deployment checks" },
  { percentage: 75, message: "Running migrations", detail: "Updating database schema" },
  { percentage: 85, message: "Validating deployment", detail: "Checking server health" },
  { percentage: 95, message: "Final configuration", detail: "Setting up CDN" },
  { percentage: 100, message: "Deployment complete", detail: "Application is live" }
];

export function getCurrentStage(percentage: number): DeploymentStage {
  return deploymentStages.reduce((prev, current) => {
    return (percentage >= current.percentage) ? current : prev;
  });
}