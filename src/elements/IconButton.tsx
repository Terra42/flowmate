import { useState } from "react";

interface IconButtonProps {
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  title?: string;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
  isReversed?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ IconComponent, title, type, onClick, isDisabled, isReversed }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        if (onClick) {
            onClick();
        }
    }

  return (
    <button className={`${title ? (isReversed ? "button-text-reversed flex items-center" : "button-text flex items-center") : "button"}`} onClick={handleClick} disabled={isDisabled} type={type}>
      {IconComponent && <IconComponent className={`${title ? (isReversed ? 'icon' : 'icon-text') : 'icon'} ${(isActive && !title) ? "icon-active" : ""}`}/>}
      {title && <span className="ml-4">{title}</span>}
    </button>
  );
};

export default IconButton;
