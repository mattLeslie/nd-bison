type TitleCardProps = {
  pText: string;
  sText: string;
}

const TitleCard = (props: TitleCardProps) => {
  return (
    <div className='h-[27.5%] w-[100%] text-white bg-[#1a1a1f] px-8 flex justify-between items-center select-none mb-8'>
        <div className="flex flex-col">
          <p className="text-4xl mb-8 font-bold">{props.pText}</p>
          <p className="text-xl text-gray-400">{props.sText}</p>
        </div>
    </div>
  );
};

export default TitleCard;
