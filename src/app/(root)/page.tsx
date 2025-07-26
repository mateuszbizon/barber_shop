import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ImageGallerySection from "@/components/sections/ImageGallerySection";
import MapSection from "@/components/sections/MapSection";
import ServiceSection from "@/components/sections/ServiceSection";
import WhyUsSection from "@/components/sections/WhyUsSection";

export default function Home() {
  return (
    <>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <WhyUsSection />
        <ImageGallerySection />
        <MapSection />
        <ContactSection />
    </>
  );
}
