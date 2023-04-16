import Image from "next/image";
import { NavBar } from "../Navbar";

const Header = () => {
  return (
    <div className="border-t-2 pt-5 pb-5 sticky bg-[#111016] mb-4 top-0 z-30 h-[12.5%] text-white flex items-center">
      <NavBar/>
    </div>
  );
};

export default Header;
