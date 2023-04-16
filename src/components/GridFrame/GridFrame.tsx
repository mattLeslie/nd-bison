import { createRef, use, useRef, useState } from "react";
import { PageScroller } from "../PageScroller";

type GridFrameProps = {
    // sorted array
    elementList: any[];
    scrollToRef?: React.RefObject<any>;
    itemsPerPage: number;
}
const GridFrame = (props: GridFrameProps) => {

  const [pageNumber, setPageNumber] = useState(0);
  
  const incrementPage = (event:any) =>{
    setPageNumber(pageNumber+1)
    if(props.scrollToRef != null)
      props.scrollToRef.current.scrollIntoView({behavior:"smooth"})
  }

  const decrementPage = (event:any) =>{
    setPageNumber(pageNumber-1)
    if(props.scrollToRef != null)
      props.scrollToRef.current.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div className="mt-12 flex flex-col items-center text-white">
        <div className="w-[90%] flex flex-wrap">
            {props.elementList.filter((element, index) => index>=props.itemsPerPage*pageNumber && index < props.itemsPerPage*pageNumber + props.itemsPerPage).
              map(function(val, index){
                return <div className="w-[100%] md:w-[50%] lg:w-[33.3%]" key={index}>{val}</div>;
            })}
        </div>
        <PageScroller 
          totalPages={Math.ceil(props.elementList.length/props.itemsPerPage)} 
          currentPage={pageNumber+1}
          handleNext={incrementPage}
          handleBack={decrementPage}
          />
    </div>
  );
};

export default GridFrame;
