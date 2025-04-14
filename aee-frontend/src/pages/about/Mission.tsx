import { JSX } from "react";

function Mission(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">Mission</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <img
          src="tech-innovation.jpg"
          alt="mission-pic"
          className="w-[300px] rounded-2xl shadow-xl border border-gray-100"
        />
        <p className="text-gray-700 text-justify leading-loose text-lg md:text-xl">
          To achieve and sustain self-sufficiency in food and fibre through engineering.
        </p>
      </div>
    </div>
  );
}

export default Mission;
