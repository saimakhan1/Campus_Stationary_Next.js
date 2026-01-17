"use client";
export const dynamic = "force-dynamic";
import { motion } from "framer-motion";

const About1 = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Our Store
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          We provide affordable and essential stationery products within the campus to support students and staff. Our goal is to make quality stationery accessible, convenient, and reliable for every student and faculty member.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Affordable Prices",
              description:
                "High-quality stationery without breaking your budget.",
              color: "bg-blue-100",
            },
            {
              title: "Fast Delivery",
              description:
                "Get your products delivered quickly and safely on campus.",
              color: "bg-green-100",
            },
            {
              title: "Reliable Support",
              description:
                "We are always ready to help with any questions or issues.",
              color: "bg-purple-100",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className={`${card.color} p-6 rounded-lg shadow-lg`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About1;
