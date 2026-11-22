import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Programs from "@/components/Programs/Programs";
import Benefits from "@/components/Benefits/Benefits";
import Team from "@/components/Team/Team";
import Classes from "@/components/Classes/Classes";
import Pricing from "@/components/Pricing/Pricing";
import FreeTrial from "@/components/FreeTrial/FreeTrial";
import Contacts from "@/components/Contacts/Contacts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Benefits />
      <Team />
      <Classes />
      <Pricing />
      <FreeTrial />
      <Contacts />
    </>
  );
}
