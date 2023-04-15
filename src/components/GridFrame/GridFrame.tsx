import { useEffect, useState } from "react";
import { PageScroller } from "../PageScroller";

type GridFrameProps = {
    // sorted array
    elementList: any[];
}
const GridFrame = (props: GridFrameProps) => {

    
  const [pageNumber, setPageNumber] = useState(0);
  const ITEMS_PER_PAGE = 9

  const incrementPage = (event:any) =>{
    setPageNumber(pageNumber+1)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });  }

  const decrementPage = (event:any) =>{
    setPageNumber(pageNumber-1)
    window.scroll({top:0,behavior:'smooth'})
  }


  return (
    <div className="mt-10 flex flex-col items-center text-white">
        <div className="w-[90%] flex flex-wrap">
            {props.elementList.filter((element, index) => index>=ITEMS_PER_PAGE*pageNumber && index < ITEMS_PER_PAGE*pageNumber + ITEMS_PER_PAGE).
              map(function(val, index){
                return <div className="w-[100%] md:w-[50%] lg:w-[33.3%]" key={index}>{val}</div>;
            })}
        </div>
        <PageScroller 
          totalPages={Math.ceil(props.elementList.length/ITEMS_PER_PAGE)} 
          currentPage={pageNumber+1}
          handleNext={incrementPage}
          handleBack={decrementPage}
          />
    </div>
  );
};

export default GridFrame;
