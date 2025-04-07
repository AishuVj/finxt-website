import Layout from '../components/Layout';

export default function CareersPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className=" py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-4 text-center" >
            Shape the future of AI - Careers at FinXT
          </h1>
          <h2 className="text-4xl lg:text-5xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-4 text-center">
            Join Our Dynamic Team at FinXT
          </h2>
          <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 max-w-3xl mx-auto">
          At FinXT, our success is built on innovation, diversity, and a commitment to excellence. We’re always looking for talented individuals passionate about technology, innovation, and making a meaningful impact through AI.
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-4xl lg:text-5xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-4 text-center">
          Why Work With Us?
        </h2>
        <ul className="text-gray-700 text-lg space-y-4 list-disc list-inside max-w-3xl mx-auto mb-10 text-[1.125rem] leading-[1.8] tracking-wide">
          <li>Work on groundbreaking AI projects</li>
          <li>Collaborative and diverse work environment</li>
          <li>Opportunities for continuous learning and professional growth</li>
          <li>Competitive compensation and comprehensive benefits
          </li>
        </ul>

        <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 max-w-3xl mx-auto">
        Explore exciting career opportunities at FinXT. View current job openings or send your resume along with a brief introduction.  <a href="mailto:career@finxt.uk" className="text-blue-600 underline">careers@finxt.ai</a>.Join us in building a brighter, smarter, AI-powered future! Let's build the future together!
        </p>
      </section>
    </Layout>
  );
}
