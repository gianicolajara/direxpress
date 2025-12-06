import type { IconType } from "react-icons";

type Props = {
  href: string;
  Icon: IconType;
  color: "white";
  size?: number;
};

const IconLink = ({ Icon, href, color, size = 40 }: Props) => {
  return (
    <div className="hover:bg-black-app/30 p-2 rounded-lg cursor-pointer shrink-0">
      <a href={href} target="_blank">
        <Icon color={color} size={size} />
      </a>
    </div>
  );
};

export default IconLink;
