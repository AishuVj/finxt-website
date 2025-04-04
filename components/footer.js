import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faYoutube,
    faTiktok,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faPhone,
    faEnvelope,
    faMapMarkerAlt,
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  
  export default function Footer() {
    return (
      <footer className="bg-[#062d36] text-white px-6 pt-10 pb-8 mt-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
          
          {/* Logo */}
          <img src="/images/DALL·E 2025-03-29 20.08.44 - A minimalist logo design for 'Fin X T' inspired by a pinhole camera aesthetic. The design should resemble a 19th-century lithograph style with fine, d.webp" alt="FinXT Logo" className="w-24 md:w-28" />
  
          {/* Contact Info */}
          <div className="text-sm md:text-base space-y-1">
            <p className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#d4af37]" /> FinXT London, United Kingdom
            </p>
            <p className="flex items-center justify-center gap-2 text-sm md:text-base">
                <FontAwesomeIcon icon={faPhone} className="text-[#d4af37]" />
                <a
                    href="tel:07837851544"
                    className="text-white hover:text-[#d4af37] underline underline-offset-4 decoration-1 transition duration-200"
                >
                    Call Us
                </a>
            </p>
            <p className="flex items-center justify-center gap-2 text-sm md:text-base">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#d4af37]" />
                <a
                    href="mailto:info@finxt.uk"
                    aria-label="Send us an email"
                    className="text-white hover:text-[#d4af37] underline underline-offset-4 decoration-1 transition duration-200"
                >
                    Send us an email
                </a>
            </p>


          </div>
  
          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-xl mt-4">
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook}  className="text-[#d4af37]"/></a>
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram}  className="text-[#d4af37]"/></a>
            <a href="#" aria-label="TikTok"><FontAwesomeIcon icon={faTwitter}  className="text-[#d4af37]"/></a>
            <a href="#" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube}  className="text-[#d4af37]"/></a>
            <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} className="text-[#d4af37]"/></a>
          </div>
          {/* Horizontal line */}
          <div
            className="w-full h-[2px] my-6"
            style={{
                backgroundImage:
                'repeating-linear-gradient(to right, #d4af37 0, #d4af37 5px, transparent 5px, transparent 10px)',
                backgroundRepeat: 'repeat-x',
                backgroundSize: '10px 2px',
            }}
            ></div>


            {/* Footer Bottom (e.g., Social Icons or Copyright) */}
  
          {/* Copyright */}
          <div className="text-xs text-gray-400 pt-4">
            © {new Date().getFullYear()} FinXT. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  