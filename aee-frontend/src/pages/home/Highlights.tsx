function Highlights() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-14 flex flex-col items-center">
      <h1 className="font-semibold text-3xl mb-6 self-start text-black pl-7 pb-3">Highlights</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col transition-transform transform hover:scale-105 cursor-pointer"
          >
            <img 
              src="bg.png" 
              alt="thumbnail" 
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-3 font-semibold text-xl">AEESS Fresher's Orientation</h3>
            <p className="text-sm italic text-gray-500 text-end">12/01/25</p>
          </div>
        ))}
      </div>
      <a href="/news-and-events" className="mt-8 px-6 py-2 bg-white text-gray-500 hover:text-black rounded-full border border-gray-400 hover:border-black text-sm font-medium transition-all">
        View All
      </a>
    </div>
  );
}

export default Highlights;
