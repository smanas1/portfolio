import Layouts from "@/Layout/Layouts";
import Agency from "@/components/Agency/Agency";
import Hero from "@/components/Hero/Hero";
import Member from "@/components/Member/Member";
import Partner from "@/components/Partners/Partner";
import Slide from "@/components/Slide/Slide";
import Subscribe from "@/components/Subscribe/Subscribe";
import Sucess from "@/components/Sucess/Sucess";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Layouts>
        <Hero />
        <Sucess />
        <Agency />
        <Member />
        <Slide />
        <Partner />
        <Subscribe/>
      </Layouts>
    </>
  );
}
