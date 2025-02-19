export interface StepLineProps {
  isActive?: boolean;
  width?: string;
}

export const StepLine = ({ isActive, width }: StepLineProps) => {
  return (
    <div
      className={`h-[4px] ${isActive ? "bg-[#4696ff]" : "bg-gray-300"}`}
      style={{ width }}
    ></div>
  );
};
