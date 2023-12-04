import { ReactNode } from "react";

type Props = {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: (currElement: EventTarget & HTMLButtonElement) => void;
};

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button
      type="button"
      className={`btn btn-${color}`}
      onClick={(e) => {
        onClick(e.currentTarget);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
