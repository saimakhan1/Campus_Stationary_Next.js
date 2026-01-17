const Categories = () => {
  const categoryData = [
    { name: "Pens", color: "bg-blue-100", icon: "🖊️" },
    { name: "Notebooks", color: "bg-green-100", icon: "📓" },
    { name: "Accessories", color: "bg-yellow-100", icon: "🎒" },
    { name: "Electronics", color: "bg-purple-100", icon: "💻" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-600">Categories</h2>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categoryData.map((category, index) => (
            <li
              key={index}
              className={`
                ${category.color} 
                p-6 rounded-xl shadow-lg 
                flex flex-col items-center justify-center 
                transform transition hover:scale-105 hover:shadow-2xl
                cursor-pointer
              `}
            >
              <span className="text-4xl mb-2">{category.icon}</span>
              <span className="text-lg font-semibold text-gray-700">
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
