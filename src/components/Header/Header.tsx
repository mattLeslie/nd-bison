import Image from "next/image";
import { NavBar } from "../Navbar";

const Header = () => {
  return (
    <div className="sticky bg-[#111016] top-0 z-50 h-[12.5%] text-white flex items-center">
      <NavBar/>
    </div>
  );
};

export default Header;
