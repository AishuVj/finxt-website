import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';


export default function Home() {
  return (
    <>
     <Layout>
      <main className="pt-2 bg-[#fdfaf7]">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>  
      </Layout>    
    </>
  );
}




