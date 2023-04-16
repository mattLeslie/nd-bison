import { Footer } from "@/components/Footer";
import { GridFrame } from "@/components/GridFrame";
import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { SiteDescriptor } from "@/components/SiteDescriptor";
import { TitleCard } from "@/components/TitleCard";
import { useRef } from "react";


const About = () => {

  const scrollToRef = useRef<any>(null);

  return (
    <div className="relative no-scrollbar">
        {/* <TitleCard pText="Site Title" sText="Description"/> */}
        <Header/>
        <Footer/>
    </div>
  );
};

export default About;
