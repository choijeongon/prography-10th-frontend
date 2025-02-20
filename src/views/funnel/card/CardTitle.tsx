export interface CardTitleProps {
  title: string;
  description: string;
}

export const CardTitle = ({ title, description }: CardTitleProps) => {
  return (
    <div className="flex flex-col justify-start items-start gap-3 w-full">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="h-[2px] w-full bg-[#4696ff]"></div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};
