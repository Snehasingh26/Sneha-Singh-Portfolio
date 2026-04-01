import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#020617] min-h-screen text-white font-sans overflow-x-hidden">
      
      {/* 
        HERO SCROLLYTELLING SECTION 
        It has fixed heights and sticky inner elements to facilitate the animation.
        It must be at the top of the flow.
      */}
      <div className="relative z-10 w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* 
        CONTENT SECTIONS
        These sit below the 400vh scrollytelling container in the normal document flow.
        We add a soft gradient transition at the top.
      */}
      <div className="relative z-20 w-full bg-[#020617]">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#020617] pointer-events-none -translate-y-full" />
        
        <About />
        
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
        
        <Projects />

        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
        
        <Skills />

        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        <Experience />

        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        <Achievements />

        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        <Certifications />

        <Contact />

      </div>

    </main>
  );
}
