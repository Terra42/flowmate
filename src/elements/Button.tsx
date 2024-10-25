import { useState } from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
  isDisabled?: boolean;
  isReversed?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, isDisabled, isReversed = false }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        onClick();
    }

  return (
    <button className={isReversed ? "button-text-reversed" : "button-text"} onClick={handleClick} disabled={isDisabled}>
      {title}
    </button>
  );
};

export default Button;
