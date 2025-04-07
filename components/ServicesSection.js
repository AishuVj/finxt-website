export default function ServicesSection() {
  return (
    <section className="w-full py-20 mt-24 bg-[#0b1c20] text-white rounded-none shadow-md">
      <div className="px-4 md:px-10 text-center">
        <h2 className="text-4xl lg:text-4xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-10">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6 text-left">
            {[
              { title: 'AI Strategy', desc: 'Tailored consulting to assess AI capabilities and develop strategic roadmap.' },
              { title: 'Custom AI', desc: 'Development of personalized AI chatbots and virtual assistants for engagement.' },
              { title: 'AI-Enhanced Analytics', desc: 'Solutions that leverage AI algorithms to analyze data, extract insights, and support decision-making.' }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0f2a2f] p-4 rounded-md shadow-md hover:shadow-lg transition"
              >
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-[1.125rem] leading-[1.8] tracking-wide text-white max-w-3xl mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center">
            <img
              src="/images/Robot.webp"
              alt="Robot"
              className="w-full max-w-xs rounded-xl shadow-2xl"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-left">
            {[
              { title: 'Advanced AI', desc: 'Implementation of AI technologies to enhance cybersecurity and detect threats.' },
              { title: 'Smart Payment', desc: 'Comprehensive payment integration services that streamline transactions and enhance customer experience.' },
              { title: 'Reward Solutions', desc: 'Development of innovative reward and loyalty programs powered by AI.' }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0f2a2f] p-4 rounded-md shadow-md hover:shadow-lg transition"
              >
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-[1.125rem] leading-[1.8] tracking-wide text-white max-w-3xl mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
