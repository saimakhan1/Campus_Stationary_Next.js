import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">
          Contact Us
        </h2>
        <p className="text-gray-700 mb-12">
          We are here to help you! Reach out to us via email, phone, or visit our campus store. Your feedback and inquiries are always welcome.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1">
            <FaEnvelope className="text-blue-600 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">campusstore@gmail.com</p>
          </div>

          {/* Location Card */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1">
            <FaMapMarkerAlt className="text-green-600 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">University Campus, Bangladesh</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1">
            <FaPhoneAlt className="text-purple-600 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+880 1234 567890</p>
          </div>
        </div>

        {/* Optional Contact Form */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
          <form className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full border p-3 rounded"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
