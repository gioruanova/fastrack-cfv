import MainContainer from "@/components/containers/MainContainer";
import { HeroBanner } from "@/components/hero/HeroBanner";
import { Nosotros } from "../components/nosotros/Nosotros";
import { Propuesta } from "../components/propuesta/Propuesta";
import { Planes } from "../components/planes/Planes";
import { Contact } from "../components/contact/Contact";


export default function Home() {
  return (
    <>
      <HeroBanner />
      <MainContainer>
        <Propuesta />
        <Nosotros />
        <Planes />
        <Contact />
      </MainContainer>
    </>
  );
}
