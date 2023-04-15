import { Footer } from "@/components/Footer";
import { GridFrame } from "@/components/GridFrame";
import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { TitleCard } from "@/components/TitleCard";


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

const LandingHome = () => {
  return (
    <div className="h-screen relative no-scrollbar">
        <Header/>
        <TitleCard pText="Matt's World" sText="I'm just living in it"/>
        <div className="flex justify-center">
         <div className="w-[90%] text-white pt-4 font-bold text-xl">Feed</div>
        </div>
        <GridFrame elementList={elementList}/>
        <Footer/>
    </div>
  );
};

export default LandingHome;
