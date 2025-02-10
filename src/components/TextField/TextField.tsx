import { ReactNode, RefObject } from "react";
import style from "./style.module.scss";

export const TextField = ({
  placeholder,
  name,
  ref,
  variant = "primary",
  label,
  type = "text",
  value,
  onChange,
}: {
  value: string;
  ref?: RefObject<HTMLInputElement | null>;
  placeholder?: string;
  name?: string;
  variant?: "primary" | "secondary";
  label?: string | ReactNode;
  type?: "text" | "email";
  onChange?: (arg: string) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div
      className=""
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      {label && <label>{label}</label>}
      <input
        onChange={handleChange}
        ref={ref}
        value={value}
        type={type}
        className={`${style.input} ${style[variant]}`}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};
