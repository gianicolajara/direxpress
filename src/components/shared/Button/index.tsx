import type { ReactNode } from "react";
import { cn } from "../../../lib/utils";

type Colors = "SUCCESS" | "ERROR" | "DEFAULT" | "BLUE";
type Size = "BIG" | "NORMAL";

type Props = {
  color?: Colors;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  size?: Size;
};

const Button = ({
  color = "DEFAULT",
  children,
  className,
  onClick,
  href,
}: Props) => {
  const classesNames = cn(
    "rounded-lg text-white font-bold cursor-pointer hover:bg-green-900 transition-all p-3 font-roboto-condensed px-2 2xl:p-6 2xl:px-5 2xl:text-xl 2xl:text-2xl",
    {
      "bg-green-700 hover:bg-green-900": color === "SUCCESS",
      "border-4 border-red-app hover:bg-red-app text-red-app hover:text-white":
        color === "ERROR",
      "border-4 border-white hover:bg-white-app text-white-app hover:text-black-app":
        color === "DEFAULT",
      "border-4 border-blue-app hover:bg-blue-app text-blue-app hover:text-white":
        color === "BLUE",
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
