type Props = {
  title: string;
  content: string;
};

const ItemNational = ({ content, title }: Props) => {
  return (
    <div className="flex gap-x-4 items-center lg:flex-row flex-col">
      <h4 className="text-4xl lg:text-6xl font-bold text-white font-roboto-condensed text-center">
        {title}
      </h4>
      <p className="text-2xl lg:text-3xl text-white lg:text-left text-center">
        {content}
      </p>
    </div>
  );
};

export default ItemNational;
