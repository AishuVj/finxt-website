import { useState } from 'react';
import Layout from '../components/Layout';

export default function About() {
  const initialTeam = [
    {
      name: 'Tarun Addu',
      title: 'Chief Operating Officer',
      shortDescription: 'As our Chief Operating Officer (COO), Tarun brings extensive experience in ...',
      fullDescription:
        'As our Chief Operating Officer (COO), Tarun brings extensive experience in strategic business analysis, product management, and operations, particularly within government and public sector organizations. His primary focus is to optimize our company operational performance, spearheading strategic projects, managing resources efficiently, and ensuring seamless coordination across departments to achieve our collective goals.With deep expertise in IT procurement, cybersecurity, and AI, he leads the development and implementation of operational strategies that enhance security, efficiency, and innovation across our organization. Tarun is committed to transforming complex challenges into practical solutions that drive continuous improvement and sustainable growth.He remains passionate about collaboration, exchanging ideas, and contributing to initiatives that strengthen our mission and long-term success. We are proud to have him as a key leader within our team, helping shape the future of our organization.Feel free to connect with him—together, we can continue delivering impactful results.',
      image: '/images/avatar1.svg',
    },
    {
      name: 'Anusha Addu',
      title: 'Founder & CEO',
      shortDescription: 'As the Founder and Chief Executive Officer (CEO) of our company, Anusha is the visionary force...',
      fullDescription:
        'As the Founder and Chief Executive Officer (CEO) of our company, Anusha is the visionary force driving our strategic direction and long-term growth. With a passion for innovation and a relentless focus on impact, she established the company with a mission to deliver high-quality, future-focused solutions that meet the evolving needs of our clients. Anusha brings a wealth of experience in business leadership, technology, and operational transformation. Under her leadership, the company has grown from a bold idea into a trusted organisation known for its integrity, excellence, and forward-thinking approach. A strong advocate for collaboration, culture, and customer-centricity, Anusha continues to inspire the team to push boundaries and deliver real value to clients worldwide.',
      image: '/images/avatar2.svg',
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
  <section className=" py-20 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      {/* Left Text */}
      <div>
        <h4 className="text-sm text-gray-500 uppercase mb-2">Our company in numbers.</h4>
        <h2 className="text-3xl font-bold mb-4">Get to know us</h2>
        <p className="text-gray-700 leading-relaxed">
          Our company, FinXT, is dedicated to empowering businesses through innovative AI solutions.
          We leverage the transformative potential of artificial intelligence to revolutionize business
          practices and turn challenges into opportunities. Specializing in personalized consulting, we
          offer tailored AI solutions, including strategy development, custom chatbots, data analytics,
          and cybersecurity. We help clients embrace the future with confidence and success.
        </p>
      </div>

      {/* Right Image with Stats Overlay */}
      <div className="relative">
        <img
          src="/images/newspaper.jpg"
          alt="Business Team"
          className="rounded-lg shadow-lg"
        />
        {/* Stat 1 */}
        <div className="absolute top-8 right-0 bg-[#0f2a2f] text-white px-4 py-2 rounded-md shadow-md text-sm">
          <p className="font-bold text-lg">+20</p>
          <p className="text-xs">Specialists</p>
        </div>
        {/* Stat 2 */}
        <div className="absolute bottom- 0 left-6 bg-[#0f2a2f] text-white px-4 py-2 rounded-md shadow-md text-sm">
          <p className="font-bold text-lg">+220</p>
          <p className="text-xs">Satisfied Customers</p>
        </div>
        {/* Stat 3 */}
        <div className="absolute top-2 left-0  bg-[#0f2a2f] text-white px-4 py-2 rounded-md shadow-md text-sm">
          <p className="font-bold text-lg">+10</p>
          <p className="text-xs">Completed Projects</p>
        </div>
      </div>
    </div>
  </section>


      {/* Meet the Team Section */}
      <section className="text-gray-800 px-6 py-20 bg-white bg-[#f8f4ef]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Meet the team</h2>
          <p className="text-gray-700 mb-10 max-w-3xl mx-auto text-center">
            At FinXT, we believe in innovation, collaboration, and integrity. If you're passionate about shaping the future of AI and want to be part of an inclusive, dynamic team, we want to hear from you!
          </p>

          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {initialTeam.map((person, index) => (
              <div key={index} className="text-center p-6 bg-white border rounde-xl shadow-lg w-full max-w-sm hover:scale-105 transition-transform duration-300">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="font-semibold text-xl text-indigo-700">{person.name}</h4>
                <p className="text-sm text-gray-500 mb-2">{person.title}</p>
                <p className="text-sm text-gray-600 mt-2">
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
