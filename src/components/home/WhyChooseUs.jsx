import { FaDollarSign, FaTruck, FaStar } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Affordable Prices",
      description: "We offer high-quality stationery at student-friendly prices.",
      icon: <FaDollarSign className="text-4xl text-blue-600 mb-4" />,
    },
    {
      title: "Fast & Convenient Delivery",
      description: "Receive your products quickly on campus without hassle.",
      icon: <FaTruck className="text-4xl text-green-600 mb-4" />,
    },
    {
      title: "Quality Products",
      description: "We only stock reliable and durable stationery for your needs.",
      icon: <FaStar className="text-4xl text-purple-600 mb-4" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Why Choose Us</h2>
        <p className="text-gray-700 mb-12">
          We prioritize affordability, convenience, and quality to provide the best experience for students and staff.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
