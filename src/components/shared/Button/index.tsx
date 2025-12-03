import type { ReactNode } from "react";
import { cn } from "../../../lib/utils";

type Colors = "SUCCESS" | "ERROR" | "DEFAULT" | "BLUE";

type Props = {
  color?: Colors;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
};

const Button = ({
  color = "DEFAULT",
  children,
  className,
  onClick,
  href,
}: Props) => {
  const classesNames = cn(
    "bg-green-700 rounded-lg text-white font-bold cursor-pointer hover:bg-green-900 transition-all p-3 font-roboto-condensed px-2",
    {
      "bg-green-700 hover:bg-green-900": color === "SUCCESS",
      "bg-red-700 hover:bg-red-900": color === "ERROR",
      "bg-white hover:bg-gray-400 text-black": color === "DEFAULT",
      "bg-blue-app hover:bg-blue-950 text-white": color === "BLUE",
    },
    className
  );

  if (href) {
    return (
      <a href={href} target="_blank" className={classesNames}>
        {children}
      </a>
    );
  }

  return (
    <button className={classesNames} aria-label="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
