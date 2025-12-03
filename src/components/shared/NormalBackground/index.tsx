import type { ReactNode } from "react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "../../../lib/utils";

type Colors = "BLUE" | "TRANSPARENT" | "GREEN" | "RED" | "BLACK" | "GRAY";

type Props = {
  children: ReactNode;
  background: string;
  backgroundPhone?: string;
  className?: string;
  classNameChildren?: string;
  bgConfig?: string;
  bgColor?: Colors;
  bgColorPhone?: Colors;
  alt: string;
};

const NormalBackground = ({
  background,
  backgroundPhone,
  className,
  bgConfig,
  bgColor = "BLUE",
  children,
  bgColorPhone = "BLUE",
  alt,
  classNameChildren,
}: Props) => {
  const mediaPhone = useMediaQuery("(width < 64rem)");

  const classesNamesChildren = cn(
    classNameChildren,
    "relative z-30 w-full h-full flex justify-center py-20 px-5"
  );

  const classNames = cn(
    className,
    "w-full h-screen flex justify-center relative"
  );
  const classNamesBg = cn(bgConfig, "w-full h-full absolute z-10 object-cover");
  const classNamesColor = cn(
    {
      "lg:bg-blue-app/90": bgColor === "BLUE",
      "lg:bg-transparent": bgColor === "TRANSPARENT",
      "lg:bg-green-800/60": bgColor === "GREEN",
      "lg:bg-red-app/90": bgColor === "RED",
      "lg:bg-black-app/90": bgColor === "BLACK",

      "bg-blue-app/90": bgColorPhone === "BLUE",
      "bg-transparent": bgColorPhone === "TRANSPARENT",
      "bg-green-800/60": bgColorPhone === "GREEN",
      "bg-red-app/90": bgColorPhone === "RED",
      "bg-black-app/90": bgColorPhone === "BLACK",
    },
    "w-full h-full absolute z-20"
  );

  return (
    <section className={classNames}>
      <div className={classNamesColor}></div>
      {background && (
        <img
          alt={alt}
          src={backgroundPhone && mediaPhone ? backgroundPhone : background}
          className={classNamesBg}
        />
      )}
      <div className={classesNamesChildren}>{children}</div>
    </section>
  );
};

export default NormalBackground;
