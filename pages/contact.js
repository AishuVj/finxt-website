import Layout from '../components/Layout';
export default function ContactPage() {
  return (
    <Layout>
  
      {/* Hero Section */}
      <section className="w-full">
          <img
            src="/images/contacts.png"
            alt="Contact"
            className="w-full h-auto object-cover"
          />
      </section>

      {/* Main Form Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl lg:text-5xl font-heading text-[#2f6d6a] leading-snug tracking-wide mb-4 text-center">
          Let’s Start a Conversation
        </h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-8 shadow-md rounded-md"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>

          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="firstnName"
              placeholder="First Name"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
            
          </div>

          <div className="flex flex-col justify-between">
          <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
            
            <div className="text-sm text-gray-500 my-4">
              Please note: All fields are required.
            </div>
            <button
              type="submit"
              className="bg-[#062d36] text-white py-3 rounded-md hover:bg-[#0b3d4a] transition-all"
            >
              SEND
            </button>
          </div>
        </form>
      </section>
    
    </Layout>
  );
}
