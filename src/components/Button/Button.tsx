import { ReactNode } from "react";
import style from "./style.module.scss";

export const Button = ({
  children,
  onClick,
  disabled,
  variant = "primary",
  size = "medium",
  type = "button",
}: {
  children: ReactNode | string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "text";
  onClick?: () => void;
  type?: "button" | "submit";
  size?: "medium" | "small";
}) => {
  if (type === "submit") {
    return (
      <input
        className={`${style.button} ${style[variant]} ${size && style[size]}}`}
        type="submit"
        value={children as string}
      />
    );
  }

  return (
    <button
      className={`${style.button} ${variant && style[variant]} ${
        size && style[size]
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
