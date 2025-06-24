import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import ImageGallerySection from "@/components/sections/ImageGallerySection";
import MapSection from "@/components/sections/MapSection";
import ServiceSection from "@/components/sections/ServiceSection";

export default function Home() {
  return (
    <>
        <HeroSection />
        <AboutSection />
        <ImageGallerySection />
        <ServiceSection />
        <MapSection />
    </>
  );
}
