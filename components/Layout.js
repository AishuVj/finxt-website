import Header from './Header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-serif bg-[#fdfaf7] text-gray-800 tracking-normal leading-relaxed">
      <Header />
      
      <main className="flex-grow px-6 pt-24">
        {children}
      </main>

      <Footer />
    </div>
  );
}
