import Image from 'next/image';

type TitleCardProps = {
  pText: string;
  sText: string;
}

const TitleCard = (props: TitleCardProps) => {
  return (
    <div className='h-auto shadow-2xl w-[100%] text-white bg-transparent flex justify-between select-none'>
        <div className="block relative">
            <img 
            alt="name" 
            src="/assets/images/helens_banner.jpg" 
            className="w-[100% h-[100%] object-cover" 
            />
        </div>
    </div>
  );
};

export default TitleCard;
