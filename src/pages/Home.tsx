import { Footer } from "@/components/Footer";
import { GridFrame } from "@/components/GridFrame";
import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { SiteDescriptor } from "@/components/SiteDescriptor";
import { TitleCard } from "@/components/TitleCard";
import { useRef } from "react";

const elementList = [
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/mojave_banner2.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/salton_banner.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>,
<PostCard pText="Title" sText="subtext" date="April 14, 2023" imgUri="/assets/images/st_helens.jpg"/>
]

const Home = () => {

  const scrollToRef = useRef<any>(null);

  return (
    <div className="relative no-scrollbar">
        <TitleCard pText="Site Title" sText="Description"/>
        <Header/>
        <SiteDescriptor/>
        <div ref={scrollToRef} className="mt-4 mb-4 z-60 text-white font-bold text-xl flex justify-center">
          <div className="w-[90%] text-center flex justify-center">
            <p className="text-center text-2xl">
              Feed
            </p>
          </div>

        </div>
        <GridFrame itemsPerPage={9} scrollToRef={scrollToRef} elementList={elementList}/>
        <Footer/>
    </div>
  );
};

export default Home;
