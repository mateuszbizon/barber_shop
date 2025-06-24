import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import ImageGallerySection from "@/components/sections/ImageGallerySection";
import ServiceSection from "@/components/sections/ServiceSection";

export default function Home() {
  return (
    <>
        <HeroSection />
        <AboutSection />
        <ImageGallerySection />
        <ServiceSection />
    </>
  );
}
