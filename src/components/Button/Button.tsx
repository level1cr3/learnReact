import style from "./Button.module.css";

type Props = {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
};

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button
      type="button"
      className={[style.btn, style[`btn-${color}`]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
