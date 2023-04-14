import { NavBar } from "../Navbar";

const Footer = () => {
  return (
    <div>
        <div className="flex justify-center mb-1">
            <div className="w-[90%] w-[90%] bg-gradient-to-l from-slate-50 pt-[1px]">
                <div className="flex justify-between bg-[#111016]">
                </div>
            </div>
        </div>
        <div className="flex justify-center mb-4 text-right text-white text-[10px]">
            <div className="w-[90%]">
                <span>built by matt leslie</span>
                <p>2023</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
