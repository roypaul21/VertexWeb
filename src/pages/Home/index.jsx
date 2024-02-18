import HeroSection from "./HeroSection"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import HomeSecondSection from "./HomeSecondSection"
import HomeDivisionSection from "./HomeDivisionSection"
import HomePartnersSection from "./HomePartnersSection"

export default function Home() {
    useEffect(() => {
        Aos.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            animatedClassName: 'aos-animate',
            offset: 120, 
            delay: 0,
            duration: 400,
            easing: 'ease-in-sine',
            once: false,
            mirror: false,
        })
    },[])
    return(
        <>
         <HeroSection />
         <HomeSecondSection />
         <HomeDivisionSection />
         <HomePartnersSection />
        </>
    )
}