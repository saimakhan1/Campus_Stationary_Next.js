const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Campus Stationery Store. All rights
          reserved.
        </p>
        <p className="text-xs mt-2">
          Designed By SKM 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
