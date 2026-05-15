import SocialCardSlider from "@/custom-components/body/employee-card/employee-card";
import Footer from "@/custom-components/footer/footer";
import Navbar from "@/custom-components/navbar/navbar";
import HeroBanner from "./herobanner";
import StatsSection from "./statsSection";
import WhoWeAre from "./whoarewe";
import WhyChooseUs from "./whyChooseus";


export const metadata = {
  title: "About Us | Book Bhutan Tour",
  description:
    "Learn about Book Bhutan Tour – a licensed Bhutanese travel company dedicated to delivering authentic, memorable experiences across the Kingdom of Bhutan.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar isActive={false} />
      {/* <HeroBanner /> */}
      <WhoWeAre />
      {/* <StatsSection /> */}
      <WhyChooseUs />
              <SocialCardSlider />
      
      <Footer />
    </main>
  );
}