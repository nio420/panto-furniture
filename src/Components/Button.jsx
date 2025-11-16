import btnIcon from "../assets/button-icon.png";

const Button = ({ value, onClick, className }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`text-sm text-primary flex items-center gap-1.5 cursor-pointer ${className}`}
      >
        {value}
        <img src={btnIcon} alt="button Icon" />
      </button>
    </div>
  );
};

export default Button;
