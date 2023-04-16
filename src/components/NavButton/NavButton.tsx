import {Link} from "react-router-dom";
import { useRouter } from 'next/router';

type NavButtonProps = {
    name: string;
    link: string;
}

const NavButton = (props: NavButtonProps) => {
  const router = useRouter();

  return (
    <div className="mx-2 md:mx-8 lg:mx-16">
        <button className="hover:scale-105 hover:text-amber-500 active:opacity-50 hover:delay-50 transition duration-300"
        onClick={() => router.push(props.link)}>
          {props.name}
        </button>
    </div>
  );
};

export default NavButton;
