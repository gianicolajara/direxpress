import { type LucideProps } from "lucide-react";
import Button from "../Button";

type Props = {
  title: string;
  subTitle: string;
  content: string;
  Icon: React.ComponentType<LucideProps>;
};

const ItemSpecificService = ({ content, subTitle, Icon }: Props) => {
  return (
    <article className="w-full h-full bg-white rounded-lg p-5 flex flex-col gap-y-2 justify-between items-center shadow-lg">
      <Icon size={50} className="text-red-app" />

      <h4 className="font-roboto-condensed font-bold text-xl text-black-app">
        {subTitle}
      </h4>
      <p className="font-roboto-condensed text-black-app text-center text-lg">
        {content}
      </p>
      <Button color="ERROR" href="https://wa.link/cdb5pn">
        Contratar
      </Button>
    </article>
  );
};

export default ItemSpecificService;
