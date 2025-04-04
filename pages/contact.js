import Layout from '../components/LayOut';
export default function ContactPage() {
  return (
    <Layout>
    <div className="">
      {/* Hero Section */}
      <section
        className="h-64 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/contact.jpg')", // Add your own image here
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
      </section>

      {/* Main Form Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Let’s Start a Conversation
        </h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="grid md:grid-cols-2 gap-8 bg-white p-8 shadow-md rounded-md"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="first-name"
              placeholder="First Name"
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
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col justify-between">
            <input
              type="text"
              name="last-name"
              placeholder="Last Name"
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
    </div>
    </Layout>
  );
}
