import { useState } from 'react';
import Layout from '../components/Layout';

export default function About() {
  const initialTeam = [

    {
      name: 'Anusha',
      title: 'Founder & CEO',
      shortDescription: 'As the Founder and Chief Executive Officer (CEO) of our company, Anusha is the visionary force driving our strategic direction and long-term growth....',
      fullDescription:
        'As the Founder and Chief Executive Officer (CEO) of our company, Anusha is the visionary force driving our strategic direction and long-term growth. With a passion for innovation and a relentless focus on impact, she established the company with a mission to deliver high-quality, future-focused solutions that meet the evolving needs of our clients. Anusha brings a wealth of experience in business leadership, technology, and operational transformation. Under her leadership, the company has grown from a bold idea into a trusted organisation known for its integrity, excellence, and forward-thinking approach. A strong advocate for collaboration, culture, and customer-centricity, Anusha continues to inspire the team to push boundaries and deliver real value to clients worldwide.',
    },
    {
      name: 'Tarun',
      title: 'Chief Operating Officer',
      shortDescription: 'As our Chief Operating Officer (COO), Tarun brings extensive experience in strategic business analysis, product management, and operations, particularly within government and public sector organizations....',
      fullDescription:
        'As our Chief Operating Officer (COO), Tarun brings extensive experience in strategic business analysis, product management, and operations, particularly within government and public sector organizations. His primary focus is to optimize our company operational performance, spearheading strategic projects, managing resources efficiently, and ensuring seamless coordination across departments to achieve our collective goals.With deep expertise in IT procurement, cybersecurity, and AI, he leads the development and implementation of operational strategies that enhance security, efficiency, and innovation across our organization. Tarun is committed to transforming complex challenges into practical solutions that drive continuous improvement and sustainable growth.He remains passionate about collaboration, exchanging ideas, and contributing to initiatives that strengthen our mission and long-term success. We are proud to have him as a key leader within our team, helping shape the future of our organization.Feel free to connect with him—together, we can continue delivering impactful results.',
    },
    {
      name: 'Rohan',
      title: 'Senior Project Manager',
      shortDescription: 'Rohan brings over 15 years of extensive experience in managing complex technology projects across multiple sectors,including finance, IT procurement, and cybersecurity.',
      fullDescription:
        'Rohan brings over 15 years of extensive experience in managing complex technology projects across multiple sectors, including finance, IT procurement, and cybersecurity. He excels in strategic planning, stakeholder management, and ensuring projects are delivered within scope, budget, and timeline. Rohan’s leadership and meticulous approach drive efficiency and excellence within FINXT.',
    },
    {
      name: 'Diana',
      title: 'AI Engineer & Developer',
      shortDescription: 'Diana  is an accomplished AI engineer specializing in machine learning, neural networks, and innovative AI-driven solutions.',
      fullDescription:
        'Diana  is an accomplished AI engineer specializing in machine learning, neural networks, and innovative AI-driven solutions. With a degree in Artificial Intelligence and over a decade of experience in developing cutting-edge applications, Diana is passionate about leveraging AI to transform financial technologies. Her expertise ensures FINXT stays at the forefront of technological innovation.',
    },
    {
      name: 'Aishu',
      title: 'Technical Data & Business Analyst',
      shortDescription: 'Aishu is an insightful Data and Business Analyst with significant expertise in financial data analytics, market research, and business intelligence.',
      fullDescription:
        'Aishu is an insightful Data and Business Analyst with significant expertise in financial data analytics, market research, and business intelligence. Aishu combines analytical skills with strategic insight to help FINXT make informed, data-driven decisions. Her ability to interpret complex data sets and transform them into actionable business strategies positions FINXT to consistently outperform market expectations.',
    },
   
  ];

  const [expanded, setExpanded] = useState({});

  const toggleDescription = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Layout>
      
        {/* Get to Know Us Section */}
  <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-6 text-center underline underline-offset-8 decoration-2">
          About Us
        </h2>
        
        <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 ">
          At <span className="font-semibold text-[#2f6d6a]">FinXT</span>, we exist to simplify the complex and deliver what truly matters: secure, intelligent, and impactful digital solutions that empower organisations to evolve with confidence.
        </p>
        <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700">
          Founded with a mission to bridge the gap between strategy and execution, FINXT is a UK-based consultancy and delivery partner specialising in:
        </p>
        <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 mb-6">
          Our mission is to simplify complexity and deliver intelligent, scalable solutions that help organisations embrace digital transformation with confidence. We specialise in:
        </p>
        <ul className="list-disc list-inside pl-4 text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 mb-6">
          <li>AI Strategy & Readiness Consulting</li>
          <li>AI-enhanced Data Analytics</li>
          <li>AI-Cybersecurity & Threat Detection</li>
          <li>Smart Payment integration solutions</li>
          <li>Digital Change Delivery and Change Delivery</li>
          <li>Reward and Loyalty Solutions and Platform</li>
        </ul>
        <h2 className="text-4xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-6 text-center">
          Who we Serve
        </h2>
        <div className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
              <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700">Digital & IT Leaders</p>
              <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700">In the Public & Private Sector</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
              <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700">Private Enterprises</p>
              <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700">Seeking secure transformation</p>
            </div>
          </div>
          <p className="text-center max-w-3xl mx-auto">
            Whether you’re looking to streamline services, enhance security, or drive sustainable change —
            <span className="font-medium text-[#2f6d6a]"> we’re ready to help you get there.</span>
          </p>
        </div>

      </div>
  </section>

      {/* Meet the Team Section */}
      <section className="  px-10">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-4xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-6 text-center" style={{color: '#2f6d6a'}}>Meet the team</h2>
          <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 ">
            At FinXT, we believe in innovation, collaboration, and integrity. If you're passionate about shaping the future of AI and want to be part of an inclusive, dynamic team, we want to hear from you!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 py-10 justify-items-center">
          {initialTeam.map((person, index) => (
                <div key={index} className="text-center">
                  <img
                    src={`https://api.dicebear.com/7.x/bottts/svg?seed=${person.name}`}
                    alt={person.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-2xl lg:text-3xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-4 text-center" style={{color: '#2f6d6a'}}>{person.name}</h4>
                  <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 max-w-3xl mx-auto" style={{color: '#2f6d6a'}}>{person.title}</p>
                  <p className="text-[1.125rem] leading-[1.8] tracking-wide text-gray-700 max-w-3xl mx-auto" style={{color: '#2f6d6a'}}>
                    {expanded[index] ? person.fullDescription : person.shortDescription}
                  </p>
                  <button
                    className="text-blue-600 hover:underline mt-2 text-sm"
                    onClick={() => toggleDescription(index)}
                  >
                    {expanded[index] ? 'See less' : 'See more'}
                  </button>
                </div>
              ))}
          </div>


        </div>
      </section>
    </Layout>
  );
}
