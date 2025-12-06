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
    "text-white font-bold cursor-pointer hover:bg-green-900 transition-all p-3 font-roboto-condensed px-4 2xl:p-3 2xl:px-3 2xl:text-xl 2xl:text-2xl rounded-full",
    {
      "bg-green-app hover:bg-green-800 text-white-app text-white":
        color === "SUCCESS",
      "bg-red-app hover:bg-red-800 text-white": color === "ERROR",
      "bg-white hover:bg-gray-300 text-black-app": color === "DEFAULT",
      "bg-blue-app hover:bg-blue-800 text-white": color === "BLUE",
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
