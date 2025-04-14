function Postgraduate() {
    return (
      <div className="px-4 md:px-20 py-10 mt-12">
        <h2 className="text-4xl font-bold mb-8">Postgraduate Program</h2>
  
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/mech-lab.jpg"
            alt="Postgraduate Program"
            className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md"
          />
  
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
              The postgraduate program focuses on advanced studies in Agricultural and Environmental Engineering. It includes Master's and PhD tracks with specialization in areas like environmental systems, water resources, and agro-tech innovation.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              It’s designed to develop research-oriented professionals equipped to solve Africa’s agricultural and environmental challenges.
            </p>
            <a
              href="/postgraduate"
              className="inline-block px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Postgraduate;
  