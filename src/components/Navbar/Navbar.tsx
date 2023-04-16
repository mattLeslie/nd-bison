import Image from "next/image";
import { NavButton } from "../NavButton";

const NavBar = () => {
  return (
    <div className='w-[100%] text-white font-bold px-8 flex justify-between items-center'>
      <div className="flex flex-col items-center">
        <p className="text-4xl select-none">Site Title</p>
      </div>
      <div className="flex content-center space-between text-xl">
        <NavButton name="Home" link="/Home"/>
        <NavButton name="Trips" link="/Trips/"/>
        <NavButton name="Projects"link="/Projects"/>
        <NavButton name="About" link="/About"/>
      </div>
    </div>
  );
};

export default NavBar;
