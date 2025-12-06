import { cn } from "../../../lib/utils";

type Props = {
  imgUrl: string;
  phrase: string;
  className?: string;
};

const CardValues = ({ imgUrl, phrase, className }: Props) => {
  const classesNames = cn(
    className,
    "w-full flex flex-col gap-y-5 bg-white p-5 rounded-lg shadow-lg"
  );

  return (
    <div className={classesNames}>
      <div className="w-full h-[300px] xl:h-[350px] 2xl:h-[450px] self-start shrink-0 grow-0">
        <img src={imgUrl} className="w-full h-full object-cover rounded-2xl" />
      </div>
      <div>
        <h3 className="text-black-app font-bold text-xl 2xl:text-3xl text-center font-cabin">
          {phrase}
        </h3>
      </div>
    </div>
  );
};

export default CardValues;
