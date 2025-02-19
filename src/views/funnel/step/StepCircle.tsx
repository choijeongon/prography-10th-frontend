export interface StepCircleProps {
  step?: number;
  isActive?: boolean;
}

export const StepCircle = ({ step, isActive }: StepCircleProps) => {
  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-center ${
        isActive ? "bg-[#4696ff] text-white" : "bg-gray-300 text-black"
      }`}
    >
      {step}
    </div>
  );
};
