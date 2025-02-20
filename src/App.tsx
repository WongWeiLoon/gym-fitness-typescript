import { useEffect, useState } from "react"
import Navbar from "@/scenes/navbar/index.tsx"
import Home from "@/scenes/home/index.js";
import Benefits from "@/scenes/benefits/index.tsx";
import OurClasses from "@/scenes/ourClasses/index.tsx";
import ContactUs from "@/scenes/contacUs/index.tsx";
import Footer from "@/scenes/footer/index.tsx";

import { PagesEnum } from "@/shared/types.ts";

function App() {
  const [selectedPage, setSelectedPage] = useState<PagesEnum>(PagesEnum.Home);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) { 
        setIsTopOfPage(true);
        setSelectedPage(PagesEnum.Home);
      } else {
        setIsTopOfPage(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className='app bg-gray-20'>
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage} 
      />

      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
