import { type LucideProps } from "lucide-react";
import { cn } from "../../../lib/utils";
import Button from "../Button";

type Colors = "SUCCESS" | "ERROR" | "DEFAULT" | "BLUE";

type Props = {
  title: string;
  subTitle: string;
  content: string;
  Icon: React.ComponentType<LucideProps>;
  color?: Colors;
};

const ItemSpecificService = ({
  content,
  subTitle,
  Icon,
  color = "ERROR",
}: Props) => {
  const iconClassNames = cn({
    "text-blue-app": color === "BLUE",
    "text-red-app": color === "ERROR",
  });

  return (
    <article className="w-full h-full bg-white rounded-lg  flex flex-col gap-y-2 justify-between items-center shadow-lg 2xl:gap-y-10 overflow-hidden">
      <div className="w-full h-full text-center p-4 flex flex-col justify-center items-center gap-y-5">
        <Icon size={75} className={iconClassNames} />
        <h4 className="font-roboto-condensed font-bold text-xl text-black-app 2xl:text-4xl">
          {subTitle}
        </h4>
        <p className="font-roboto-condensed text-black-app text-center text-lg 2xl:text-2xl">
          {content}
        </p>
      </div>
      <div className="w-full h-max p-5 bg-gray-100 border-t-2 border-t-gray-300 border-dashed">
        <Button
          color={color}
          href="https://wa.link/cdb5pn"
          className="flex justify-center"
        >
          Mas Informacion
        </Button>
      </div>
    </article>
  );
};

export default ItemSpecificService;
