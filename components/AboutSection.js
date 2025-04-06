// components/AboutSection.js
export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 px-6 mt-24"
      style={{ backgroundColor: '#f7f3ed' }} // Soft peach background
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-6xl  mb-4 tracking-wide" style={{color: '#2f6d6a'}}>Welcome to FinXTrust</h2>
        <h2 className="text-4xl   mb-3" style={{color: '#2f6d6a'}}>
          Empowering Your Business through Innovative AI Solutions
        </h2>
        <p className="text-gray-600 max-w-6xl mx-auto text-justify px-4 mb-10">
        At FinXT, we harness the power of artificial intelligence to revolutionize your business, transforming challenges into opportunities. Specializing in strategic AI solutions, we're your trusted partner in driving growth, enhancing security, and delivering unparalleled customer experiences.
                        <h2 className="text-center text-4xl mb-4 mt-10" style={{color: '#2f6d6a'}}>Why Choose FinXT?</h2>
              <div className="flex justify-center">
                <ul className="list-disc  text-left mt-4 mb-4 space-y-2 px-4">
                    <li>Cutting-edge AI technologies</li>
                    <li>Personalized consulting and solutions</li>
                    <li>Commitment to compliance and cybersecurity</li>
                    <li> Proven expertise in industry-leading solutions</li>
                </ul>
              </div>
              <p className="mt-4">Elevate your business today and embrace the future confidently with FinXT.</p>

        </p>

        
      </div>
    </section>
  );
}
