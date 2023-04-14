import Image from "next/image";
import { NavButton } from "../NavButton";

const NavBar = () => {
  return (
    <div className='w-[100%] text-white font-bold px-8 flex justify-between items-center'>
      <div className="flex flex-col items-center">
        <p className="text-2xl select-none">Matt's World</p>
      </div>
      <div className="flex content-center space-between">
        <NavButton name="Home"/>
        <NavButton name="Trips"/>
        <NavButton name="Projects"/>
        <NavButton name="About"/>
      </div>
    </div>
  );
};

export default NavBar;
