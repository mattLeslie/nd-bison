import Image from "next/image";

type NavButtonProps = {
    name: string;
    // link: string;
}

const NavButton = (props: NavButtonProps) => {
  return (
    <div className="mx-2 md:mx-8 lg:mx-16">
        <button className="hover:text-cyan-500 hover:delay-50 transition duration-300">
            {props.name}
        </button>
    </div>
  );
};

export default NavButton;
