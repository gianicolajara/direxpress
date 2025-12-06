import type { IconType } from "react-icons";
import { cn } from "../../../lib/utils";

type Props = {
  href: string;
  Icon: IconType;
  color: "white";
  size?: number;
  hoverColor?: "black" | "red";
};

const IconLink = ({
  Icon,
  href,
  color,
  size = 40,
  hoverColor = "black",
}: Props) => {
  const classesNames = cn("p-2 rounded-lg cursor-pointer shrink-0", {
    "hover:bg-black-app/30": hoverColor === "black",
    "hover:bg-red-app/30": hoverColor === "red",
  });

  return (
    <div className={classesNames}>
      <a href={href} target="_blank">
        <Icon color={color} size={size} />
      </a>
    </div>
  );
};

export default IconLink;
