import { PagesEnum } from "@/shared/types.ts";

import useMediaQuery from "@/hooks/useMediaQuery.ts";

import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import ActionButton from "@/shared/ActionButton.tsx";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { motion } from "framer-motion";

type HomeProps = {
    setSelectedPage: (value: PagesEnum) => void;
}

const Home = ({ setSelectedPage }: HomeProps) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
        id="home"
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/* Image and Main Header */}
        <motion.div 
            className="md:flex mx-auto w-5/6 md:h-5/6 items-center justify-center"
            onViewportEnter={() => setSelectedPage(PagesEnum.Home)}
        >

            {/* Main Header */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* Headings */}
                <motion.div 
                    className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity:1, x: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="relative"> {/* div to set 'relatively' for transparent overlay image */}
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img alt="home-page-text" src={HomePageText} />
                        </div>
                    </div> 

                    <p className="mt-8 text-sm">
                        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                        Studios to get the Body Shapes That you Dream of.. Get Your Dream
                        Body Now.
                    </p>
                </motion.div>

                {/* Actions Button */}
                <motion.div 
                    className="mt-8 flex items-center gap-8"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity:1, x: 0 },
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>

                    <AnchorLink
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(PagesEnum.ContactUs)}
                        href={`#${PagesEnum.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>

            {/* Image */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img alt="home-pageGraphic" src={HomePageGraphic} />
            </div>

        </motion.div>

        {/* Sponsors */}
        {
            isAboveMediumScreens && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img alt="redbull-sponsor" src={SponsorRedBull} />
                            <img alt="forbes-sponsor" src={SponsorForbes} />
                            <img alt="fortune-sponsor" src={SponsorFortune} />
                        </div>
                    </div>
                </div>
            )
        }
    </section>
  )
}

export default Home