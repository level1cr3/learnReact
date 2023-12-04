type Props = {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: (btnName: string) => void;
};

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button
      type="button"
      className={`btn btn-${color}`}
      onClick={() => {
        onClick(children);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
