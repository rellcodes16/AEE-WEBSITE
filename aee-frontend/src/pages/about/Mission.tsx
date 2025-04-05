import { JSX } from "react";

function Mission(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">Mission</h1>
      <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row justify-between items-center gap-8">
        <img src="hero-pic-2.png" alt="mission-pic" className="w-[300px] rounded-lg shadow-lg" />
        <p className="text-gray-700 text-justify leading-relaxed w-full md:w-[500px] text-lg">
          To achieve and sustain self-sufficiency in food and fibre through engineering.
        </p>
      </div>
    </div>
  );
}

export default Mission;
