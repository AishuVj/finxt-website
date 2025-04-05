import Layout from '../components/Layout';
import {
  BrainCircuit,
  Bot,
  BarChart3,
} from 'lucide-react';

export default function Services() {
  return (
    <Layout>
      <section className=" py-16 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Our services</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition duration-300 min-h-[360px]">
              <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <BrainCircuit size={36} className="text-amber-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Strategy and Readiness Consulting</h3>
              <p className="text-sm text-gray-600">
                Consulting services to assess your business’s readiness for AI implementation and long-term growth.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition duration-300 min-h-[360px]">
              <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <Bot size={36} className="text-amber-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom AI Chatbot Development</h3>
              <p className="text-sm text-gray-600">
                Tailored chatbot solutions to enhance customer experience and automate business communication.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition duration-300 min-h-[360px]">
              <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <BarChart3 size={36} className="text-amber-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Enhanced Data Insights</h3>
              <p className="text-sm text-gray-600">
                Advanced analytics leveraging AI to extract insights from your data and support better decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
