import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/footer';


export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-2">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <Footer />
      </main>      
    </>
  );
}




