import { Link } from "react-router-dom";

function Undergraduate() {
    return (
      <div className="px-4 md:px-20 py-6 mt-12">
        <h2 className="text-4xl font-bold mb-8">Undergraduate Program</h2>
  
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/mech-lab.jpg"
            alt="Undergraduate Program"
            className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md"
          />
  
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
              The undergraduate program in Agricultural and Environmental Engineering at the University of Ibadan is a 5-year comprehensive course that prepares students to address the challenges of sustainable agriculture and environmental conservation using engineering principles.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Students receive foundational training in engineering mathematics, soil science, environmental systems, irrigation, and machinery design, with real-world projects and field experience.
            </p>
            <Link
  to="/undergraduate-details"
  className="inline-block px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
>
  Learn More →
</Link>

          </div>
        </div>
      </div>
    );
  }
  
  export default Undergraduate;
  