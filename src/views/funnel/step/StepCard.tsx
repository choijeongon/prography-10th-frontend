import { StepCircle } from "./StepCircle";
import { StepLine } from "./StepLine";

export interface StepCardProps {
  step: number;
}

export const StepCard = ({ step }: StepCardProps) => {
  return (
    <div className="w-full h-24 flex flex-row items-center justify-evenly gap-1 bg-white rounded-lg p-8">
      <StepCircle step={1} isActive={step >= 1} />
      <StepLine isActive={step >= 2} width="360px" />
      <StepCircle step={2} isActive={step >= 2} />
      <StepLine isActive={step >= 3} width="360px" />
      <StepCircle step={3} isActive={step >= 3} />
    </div>
  );
};
