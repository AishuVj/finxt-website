import Layout from '../components/Layout';

export default function Services() {
  const services = [
    {
      title: 'AI Strategy and Readiness Consulting',
      text: 'Our comprehensive AI Strategy & Readiness Consulting helps businesses identify, evaluate, and implement AI solutions that align with their strategic goals. We provide clear roadmaps, risk assessments, and readiness checks, ensuring a smooth and effective transition into AI-driven operations.',
      image: '/images/AI Strategy.jpg',
    },
    {
      title: 'Custom AI Chatbot Development',
      text: 'FinXT develops intelligent, responsive, and customized AI chatbots and virtual assistants that significantly enhance customer engagement, automate repetitive tasks, and provide round-the-clock support, significantly boosting productivity and customer satisfaction.',
      image: '/images/AI Chatbot.jpg',
    },
    {
      title: 'AI-Enhanced Data Insights',
      text: 'Our AI-enhanced data analytics services uncover deep, actionable insights from complex datasets, enabling smarter decisions, increased efficiency, and strategic growth. Harness predictive analytics, real-time insights, and automated reporting for impactful outcomes.',
      image: '/images/AI DataAnalytics.jpg',
    },
    {
      title: 'AI Cybersecurity & Threat Detection',
      text: 'Our AI cybersecurity solutions use advanced machine learning algorithms and predictive analytics to proactively detect, prevent, and mitigate cybersecurity threats. Trust FinXT to safeguard your business, data integrity, and customer trust with the latest cybersecurity technologies.',
      image: '/images/AI Cybersecurity.jpg',
    },
    {
      title: 'Compliance-Focused AI Advisory',
      text: 'With strict regulatory environments in mind, FinXT provides compliance-focused AI advisory services that ensure your AI solutions are transparent, ethical, and fully compliant with industry standards. We navigate regulatory complexities, ensuring your peace of mind.',
      image: '/images/AI Advisory.jpg',
    },
    {
      title: 'Smart Payment Integration Solutions',
      text: 'Our smart payment solutions seamlessly integrate advanced technologies, enhancing transaction security, efficiency, and user experience. Benefit from frictionless payment systems, secure transaction processing, and scalable integration tailored specifically to your needs.',
      image: '/images/Smart Payment.jpg',
    },
    {
      title: 'Reward & Loyalty Solutions and Platform Development',
      text: 'Boost customer loyalty and retention through sophisticated, personalized reward systems and platforms developed by FinXT. Our AI-driven platforms enhance customer engagement, track user preferences, and deliver meaningful incentives tailored precisely to your customer base.',
      image: '/images/Reward system.jpg',
    },
    {
      title: 'AI in Marketing, Content & Branding',
      text: 'Transform your marketing and branding strategies with FinXT’s  AI-driven solutions, designed to deliver personalized content, predictive market analysis, and targeted branding campaigns. Maximize your marketing ROI and brand impact through AI-optimized strategies.',
      image: '/images/Marketing.jpg',
    },
  ];

  return (
    <Layout>
      <section className="py-16 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-4 text-center" style={{ color: '#2f6d6a' }}>
            Our Services
          </h1>
          <h2 className="text-4xl lg:text-5xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-4 text-center" style={{ color: '#2f6d6a' }}>
            Innovative AI Services Tailored for Success
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition duration-300 min-h-[400px] text-3xl lg:text-3xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-4 text-center "
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-100 h-100 object-cover mx-auto mb-6 rounded-lg shadow"
                />
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: '#2f6d6a' }}
                >
                  {service.title}
                </h3>
                <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 max-w-3xl mx-auto">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
