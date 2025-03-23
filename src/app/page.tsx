import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import AboutUs from "@/components/AboutUs"
import HowItWorks from "@/components/HowItWorks"
import PartnersCard from "@/components/PartnersCard"
import Newletter from "@/components/Newletter"
import ContactSection from "@/components/ContactSection"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <>
          <Hero/>
          <Stats/>
          <AboutUs/>
          <HowItWorks/>
          <Newletter/>
          <Testimonials/>
          <ContactSection/>
          <PartnersCard/>

    </>
  );
}
