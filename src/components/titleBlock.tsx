export interface ITitleBlockProps {
  name: string;
  subName: string;
}

const TitleBlock = (props: ITitleBlockProps) => {
  const { name, subName } = props;

  return (
    <div className="flex flex-col w-full items-center justify-center gap-5">
      <div className="flex flex-row w-full items-center justify-center">
        <div className="hidden lg:block w-full h-0.5 bg-[#BBBBBB]" />
        <div className="w-full px-6 flex-1 flex flex-col gap-4">
          <p className="text-[#F2542D] font-semibold text-2xl text-center lg:text-5xl md:min-w-[500px]">
            {name}
          </p>
        </div>
        <div className="hidden lg:block w-full h-0.5 bg-[#BBBBBB]" />
      </div>
      <p className="text-[#562C2CCC] font-semibold text-sm text-center lg:text-2xl">
        {subName}
      </p>
    </div>
  );
};

export { TitleBlock };
