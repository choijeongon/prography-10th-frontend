export interface PGButtonProps {
  backgroundColor?: string;
  fontColor?: string;
  width?: string;
  height?: string;
  /** Button contents */
  label: string;
  disabled?: boolean;
  /** Optional click handler */
  onClick?: () => void;
}

export const PGButton = ({
  backgroundColor,
  fontColor,
  width,
  height,
  label,
  disabled,
  onClick,
}: PGButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`rounded-md cursor-pointer text-center ${
        disabled ? "opacity-50" : ""
      }`}
      style={{ backgroundColor, width, height, color: fontColor }}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
