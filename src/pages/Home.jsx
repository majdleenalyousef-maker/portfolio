import Hero from "../component/2-hero/Hero";
import Main from "../component/3-main/Main";
import { Skills, Services, Journey } from "../component/Sections";
import { Stats, Marquee } from "../component/Extras";
import Contact from "../component/4-contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />
      <Skills />
      <Services />
      <div className="divider" />
      <Main isHome />
      <Journey />
      <div className="divider" />
      <Contact />
    </>
  );
}
