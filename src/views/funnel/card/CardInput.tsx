export interface CardInputProps {
  inputType: "text" | "number" | "email" | "password";
  id: string;
  label: string;
  value: string;
  placeholder: string;
  isRequired: boolean;
  onChange: (value: string) => void;
}

export const CardInput = ({
  inputType,
  id,
  label,
  value,
  placeholder,
  isRequired,
  onChange,
}: CardInputProps) => {
  return (
    <div className="h-32 w-full flex flex-col justify-start items-start gap-4 p-4 border border-gray-200 rounded">
      <label htmlFor={id} className="text-base font-semibold">
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 border border-gray-200 rounded bg-gray-100 pl-2"
      />
    </div>
  );
};
