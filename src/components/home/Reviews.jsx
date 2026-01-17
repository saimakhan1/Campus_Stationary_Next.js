const Reviews = () => {
  const reviewData = [
    {
      name: "Ayesha Rahman",
      role: "Campus Student",
      review: "Very convenient and affordable! I always get my stationery on time.",
      avatar: "👩‍🎓",
    },
    {
      name: "Rafiq Ahmed",
      role: "Campus Student",
      review: "Great quality products at student-friendly prices. Highly recommended!",
      avatar: "👨‍🎓",
    },
    {
      name: "Sara Khan",
      role: "Campus Student",
      review: "The best stationery store on campus. Fast delivery and helpful staff.",
      avatar: "👩‍🎓",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          Student Reviews
        </h2>
        <p className="text-gray-700 mb-12">
          Hear what our students have to say about our campus stationery store.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewData.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition"
            >
              <div className="text-5xl mb-4">{review.avatar}</div>
              <p className="text-gray-700 mb-4">"{review.review}"</p>
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <span className="text-sm text-gray-500">{review.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
