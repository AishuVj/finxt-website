import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';


export default function Home() {
  return (
    <>
     <Layout>
      <HeroSection />
      <main className=" bg-[#fdfaf7]">
        <AboutSection />
        <ServicesSection />
      </main>  
      </Layout>    
    </>
  );
}




