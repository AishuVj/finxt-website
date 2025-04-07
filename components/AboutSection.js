// components/AboutSection.js
export default function AboutSection() {
  return (
  
  <section
      id="about"
      className="  bg-gradient-to-br from-[#fdf6ec] to-[#f3ebe3] w-full py-20 mt-24 bg-[#0b1c20] text-white rounded-none shadow-md"
    >
      <div className="max-w-6xl mx-auto px-6"> {/* <== this is key! */}
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-4">
            Welcome to FinXTrust
          </h2>
          <h2 className="text-4xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-4">
           Your Gateway to AI-Driven Business Excellence
          </h2>
        </div>

        <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 max-w-3xl mx-auto">
        At FinXT, we combine the transformative power of artificial intelligence with deep industry expertise to drive your business into the future. We specialize in creating reliable, cutting-edge AI solutions customized for each client's specific needs. With FinXT, innovation meets reliability, ensuring your business not only thrives but leads in today’s competitive landscape.
        </p>
        <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 max-w-3xl mx-auto">Discover the difference with FinXT – partner with us for a smarter, secure, and more profitable future.</p>

        <h2 className="text-4xl  font-heading text-[#2f6d6a] leading-snug tracking-wide mb-4 text-center">
          Why Choose FinXT?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 max-w-3xl mx-auto">
          {[
            'Innovative AI-driven strategies tailored to your business',
            'Proven track record of successful implementations',
            'Unwavering commitment to data security and compliance',
            'Deep industry insights and expertise',
            'Exceptional customer support and partnership',
            'Personized consulting and solutions',
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 text-center font-medium text-gray-800 hover:shadow-lg transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
  </section>
  

  );
} 



