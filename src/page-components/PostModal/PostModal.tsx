import Image from "next/image";
import PostModalProps from "./types/PostModalProps"
// NOTE: imageURI must point to a 16:9 photo to prevent stretching
// Trimming will be handled by upload at a later date


    // class="font-black text-6xl block duration-500 relative transform transition-all translate-y-12 ease-out" 
    // data-replace='{ "translate-y-12": "translate-y-0" }'

  const PostModal = (props: PostModalProps) => {

    return (
      <div className='w-[100%] mb-10  z-10 transition-all delay-50 hover:-translate-y-5 hover:scale-110 group/card cursor-pointer clickable'>

      </div>
    );
  };
  
  export default PostModal;
  