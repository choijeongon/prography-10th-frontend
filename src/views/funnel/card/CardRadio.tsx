export interface CardRadioProps {
  value: boolean;
  text: string;
  name: string;
  onChange: (checked: boolean) => void;
}

export const CardRadio = ({ value, text, name, onChange }: CardRadioProps) => {
  return (
    <label className="flex flex-row h-16 w-full justify-start items-center p-4 border border-gray-200 rounded cursor-pointer hover:bg-gray-100 transition">
      <input
        type="radio"
        name={name}
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="form-radio text-blue-600"
      />
      <span className="ml-3">{text}</span>
    </label>
  );
};
