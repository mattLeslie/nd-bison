
type GridFrameProps = {
    elementList: any[];
}


const GridFrame = (props: GridFrameProps) => {
  return (
    <div className="mt-10 flex flex-col items-center text-white">
        
        <div className="w-[90%] flex flex-wrap">
            {props.elementList.map(function(val, index){
                console.log(val)
                return <div className="w-[100%] md:w-[50%] lg:w-[33.3%]" key={index}>{val}</div>;
            })}
        </div>
    </div>
  );
};

export default GridFrame;
