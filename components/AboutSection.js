// components/AboutSection.js
export default function AboutSection() {
  return (
  
  <section
      id="about"
      className=" w-full py-16 px-4 text-white rounded-none shadow-md"
    >
      <div className="max-w-7xl mx-auto text-center"> {/* <== this is key! */}
       
          <h1 className="text-5xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-10">
            Welcome to FinXTrust
          </h1>
          <h2 className="text-4xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-6">
          Powering the Future with AI-Driven Digital Transformation. Securely. Strategically. Seamlessly.
          </h2>
        <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-800 ">
            At FINXT, we are an AI-focused transformation company on a mission to help organisations harness the full power of artificial intelligence, data, and digital innovation.
        </p>
        <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-800 ">
            We don’t just deliver technology—we design intelligent, secure, and scalable solutions that solve real-world problems. From AI strategy and cybersecurity to smart data analytics and digital change delivery, our work is built to empower public and private sector organisations to move with speed and confidence.
        </p>
        <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-800 ">

            We specialise in mission-critical programmes, especially across the UK Public and regulated sectors, where precision, trust, and measurable outcomes are essential.
        </p>
       

        {/* Why Work With Us */}
      <section className="max-w-7xl mx-auto py-12 px-6">
          <h2 className="text-3xl lg:text-4xl font-heading text-[#2f6d6a] mb-10 text-center">
            Why Choose FinXT?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
              
                desc: 'Innovative AI-driven strategies tailored to your business.'
              },
              {
                desc: 'Proven track record of successful implementation.'
              },
              {
                desc: 'Unwavering commitment to data security and compliance.'
              },
              {
                
                desc: 'Deep industry insights and expertise.'
              },
              {
                
                desc: 'Exceptional customer support and partnership.'
              },
              {
                
                desc: 'Personized consulting and solutions.'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-[#2f6d6a] mb-2">{item.title}</h3>
                <p className="text-gray-700 text-[1.05rem] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
      </section>

      </div>
  </section>
  

  );
} 



