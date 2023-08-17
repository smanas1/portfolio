import Layouts from "@/Layout/Layouts";
import Hero from "@/components/Hero/Hero";
import Member from "@/components/Member/Member";
import Sucess from "@/components/Sucess/Sucess";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Layouts>
        <Hero />
        <Sucess />
        <Member />
      </Layouts>
    </>
  );
}
