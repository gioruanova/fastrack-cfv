import MainContainer from "@/components/containers/MainContainer";
import { HeroBanner } from "@/components/hero/HeroBanner";
import { Nosotros } from "../components/nosotros/Nosotros";
import { Propuesta } from "../components/propuesta/Propuesta";
import { Contact } from "../components/contact/Contact";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <MainContainer>
        <Nosotros />
        <Propuesta />
        <Contact />
      </MainContainer>
    </>
  );
}
