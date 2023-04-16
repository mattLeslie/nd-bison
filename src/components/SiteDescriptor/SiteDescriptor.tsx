import Image from 'next/image';

const SiteDescriptor = () => {
  return (
    <div className='flex w-[100%] justify-center pt-4 pb-6'>
        <div className='flex divide-x divide-slate-500 text-white w-[90%] justify-center'>
            <div className='w-[41%] mr-12 flex flex-col justify-center'>
                <div className="block relative w-[100%]">
                    <img 
                    alt="name" 
                    src="/assets/images/headshot.jpg" 
                    className="object-fill h-[100%] rounded-full border-2 border-slate-500" 
                    />
                </div>

            </div>
            <div className='pl-12 w-[100%] flex flex-col pt-4 pb-4 space-y-4 text-xl'>
                <p> Lorem ipsum dolor sit amr sodales. Nam sed lobortis justo. Donec ornare vitae velit tincidunt finibus. Mauris interdum vestibulum justo, id malesuada mauris feugiat porttitor. Ut placerat fringilla lectus, et facilisis leo laoreet quis. Nulla augue sapien, tincidunt at metus sit amet, tristique rutrum metus. Ut aliquam eleifend leo, non tristique magna mollis in. Etiam vitae ornare lacus. Nulla facilisi. Phasellus vitae congue magna. Cras tristique, lectus non sodales dictum, sem massa varius risus, ut condimentum erat nisl sed sapien. Nulla ex velit, pulvinar et sagittis nec, porta vitae enim. Fusce eu lectus lorem. Integer ornare varius massa, id dapibus erat feugiat sit amet. Sed vel commodo leo, at ultrices justo. 
                </p>
                <p>Lorem ipsum dolor sit amr sodales. Nam sed lobortis justo. Donec ornar</p>
            </div>
        </div>
    </div>
  );
};

export default SiteDescriptor;
