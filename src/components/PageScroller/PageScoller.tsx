type PageScrollerProps = {
    currentPage: number;
    totalPages: number
    handleNext: (event:any)=>void;
    handleBack: (event:any)=>void;
}
  
const PageScroller = (props: PageScrollerProps) => {
    return (
        <div className="font-bold flex w-[90%] justify-between mb-8">
            <div className="w-[100%] flex justify-center">
                <button className="w-[90%] bg-[#1a1a1f] py-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed active:opacity-50"
                 disabled={props.currentPage == 1}
                 onClick={props.handleBack}>
                    &#8249; Prev
                </button>
            </div>
            <div className="w-[100%] flex justify-center">
                <button className="w-[90%] bg-[#1a1a1f] py-4 rounded-lg cursor-default">
                    <p>Page {props.currentPage} of {props.totalPages} </p>
                </button>
            </div>
            <div className="w-[100%] flex justify-center">
                <button className="w-[90%] bg-[#1a1a1f] py-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed active:opacity-50"
                 disabled={props.currentPage == props.totalPages}
                 onClick={props.handleNext}>
                    Next &#8250;
                </button>
            </div>
        </div>
    );
};

export default PageScroller;
