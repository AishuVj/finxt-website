import Layout from '../components/Layout';

export default function CareersPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-8 underline underline-offset-8 decoration-2">
            Careers at FinXT
          </h1>
          <h2 className="text-3xl lg:text-4xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-6">
            Shape the Future of AI
          </h2>
          <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 mb-4">
            Join a team that’s shaping the future of digital transformation, one solution at a time.
          </p>
          <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 mb-4">
            At FINXT, we're not just building products, we're creating possibilities. Whether it's driving innovation in public sector services, developing secure and scalable IT procurement solutions, or enabling change in critical infrastructure, our people are at the heart of everything we do.
          </p>
          <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 ">
            We're always looking for passionate professionals who are excited to make a real impact. If you're looking for more than just a job—if you're looking to build a meaningful career—you’re in the right place!
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-7xl mx-auto py-8 px-6">
          <h2 className="text-3xl lg:text-4xl font-heading text-[#2f6d6a]  mb-8 text-center">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Purpose-Driven Work',
                desc: 'Tackle real-world problems in public services, cybersecurity, and enterprise tech.'
              },
              {
                title: 'Growth-Oriented Culture',
                desc: 'Upskill with mentorship, certifications, and fast-track leadership.'
              },
              {
                title: 'Flexibility & Trust',
                desc: 'Hybrid work, flexible hours, and a results-driven approach.'
              },
              {
                title: 'Cutting-Edge Projects',
                desc: 'Work on impactful projects with forward-thinking professionals.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-[#2f6d6a] mb-2">{item.title}</h3>
                <p className="text-gray-700 text-[1.05rem] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
      </section>


      {/* What We Look For */}
      <section className="max-w-7xl mx-auto py-8 px-6">
            <h2 className="text-3xl lg:text-4xl font-heading text-[#2f6d6a] mb-8 text-center">
              What We Look For
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Analytical Thinkers who can dive deep into complex problems',
                'Creative Problem Solvers who bring ideas to life',
                'Technically Curious minds who adapt quickly',
                'Collaborators who thrive in cross-functional teams',
                'Customer-Focused and mission-driven individuals'
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 text-gray-800 text-[1.05rem] leading-[1.7]"
                >
                  <span className="text-[#2f6d6a] text-xl">•</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
      </section>

      {/* Life at FinXT */}
      <section className="max-w-7xl mx-auto py-8 px-6">
            <h2 className="text-3xl lg:text-4xl font-heading text-[#2f6d6a] mb-8 text-center">
            Life at FINXT
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                '✨ A small team with big ambitions.',
                '✨ Fast-moving, high-trust, high-impact environment.',
                '✨ A voice at the table from Day 1.',
                '✨ Opportunities to work on high end transformation programmes.',
                '✨ Diversity, inclusion, and fresh thinking are not buzzwords—they’re how we operate.'
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 text-gray-800 text-[1.05rem] leading-[1.7]"
                >
                  <span className="text-[#2f6d6a] text-xl">•</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
      </section>



      {/* Open Roles */}
      <section className="max-w-7xl mx-auto  py-8 px-4 text-center">
      <h2 className="text-3xl lg:text-4xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-6">
          Ready to Create the Future?
        </h2>
        <h2 className="text-3xl lg:text-4xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-6">
          Open Roles
        </h2>
        <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 mb-4">
          We're in a growth phase — New roles will be posted soon.
        </p>
        <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 mb-4">
          We’re always excited to connect with brilliant minds. If you're ready to be part of a team that values excellence, innovation, and purpose—we’d love to hear from you.
        </p>
        <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 mb-4">
          Drop us your CV and a short note about your interests. If there’s a fit, we’ll reach out.
           Click the button below to reach us,
        </p>
        <a href="mailto:career@finxt.uk" className="inline-block bg-[#2f6d6a] text-white px-6 py-3 rounded-md hover:bg-[#1f4e4b] transition">
          Let’s build the future together
        </a>
       </section>
    </Layout>
  );
}
