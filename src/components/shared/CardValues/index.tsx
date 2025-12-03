import { cn } from "../../../lib/utils";

type Props = {
  imgUrl: string;
  phrase: string;
  className?: string;
};

const CardValues = ({ imgUrl, phrase, className }: Props) => {
  const classesNames = cn(className, "w-full flex flex-col gap-y-4");

  return (
    <div className={classesNames}>
      <div className="w-full h-[300px] self-start shrink-0 grow-0">
        <img src={imgUrl} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div>
        <h3 className="text-white font-bold text-lg text-center font-roboto-condensed">
          {phrase}
        </h3>
      </div>
    </div>
  );
};

export default CardValues;
