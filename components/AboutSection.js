// components/AboutSection.js
export default function AboutSection() {
  return (
  
  <section
      id="about"
      className=" max-w-10xl mt-12 py-20 mx-10 bg-gradient-to-br from-[#fdf6ec] to-[#f3ebe3] rounded-xl shadow-md"
    >
      <div className="max-w-6xl mx-auto px-6"> {/* <== this is key! */}
        <div className="text-center">
          <h2 className="text-5xl mb-4 tracking-wide" style={{ color: '#2f6d6a' }}>
            Welcome to FinXTrust
          </h2>
          <h2 className="text-4xl mb-6" style={{ color: '#2f6d6a' }}>
           Your Gateway to AI-Driven Business Excellence
          </h2>
        </div>

        <p className="text-gray-600 max-w-4xl mx-auto text-justify mb-10">
        At FinXT, we combine the transformative power of artificial intelligence with deep industry expertise to drive your business into the future. We specialize in creating reliable, cutting-edge AI solutions customized for each client's specific needs. With FinXT, innovation meets reliability, ensuring your business not only thrives but leads in today’s competitive landscape.
        </p>
        <p className="text-gray-600 max-w-4xl mx-auto text-justify mb-10">Discover the difference with FinXT – partner with us for a smarter, secure, and more profitable future.</p>

        <h2 className="text-4xl mb-6 text-center mt-12" style={{ color: '#2f6d6a' }}>
          Why Choose FinXT?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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



