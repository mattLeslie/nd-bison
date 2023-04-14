import Image from "next/image";

// NOTE: imageURI must point to a 16:9 photo to prevent stretching
// Trimming will be handled by upload at a later date

type PostCardProps = {
    pText: string;
    sText: string;
    imgUri: string;
    date: string;
  }
  
  const PostCard = (props: PostCardProps) => {
    return (
      <div className='w-[100%] mb-10 hover:-translate-y-4 z-10 hover:scale-110 transition delay-50 group/card'>
        <div className="flex flex-col">
            <div className="flex justify-center w-[100%]">
              <div className="relative w-[90%] h-44 rounded-2xl overflow-hidden flex items-center">
                  <div className="bg-black text-xs p-2 rounded-lg text-white absolute z-10 top-3 left-3 flex items-center">
                      <p>{props.date}</p>
                  </div>
                  <Image className="aspect-[4/3] object-none" alt="" src={props.imgUri} fill/>
              </div>
            </div>
            <div className="flex justify-center w-[100%]">
              <p className="group-hover/card:underline w-[90%] items-left text-2xl font-bold pt-2 pb-1">{props.pText}</p>
            </div>
            <div className="flex justify-center w-[100%]">
              <p className="w-[90%] items-left text-gray-400">{props.sText}</p>
            </div>
          </div>
      </div>
    );
  };
  
  export default PostCard;
  