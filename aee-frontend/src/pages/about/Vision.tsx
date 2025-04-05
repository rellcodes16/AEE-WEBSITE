import { JSX } from "react";

function Vision(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">Vision</h1>
      <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-gray-700 text-justify leading-relaxed w-full md:w-[500px] text-lg">
          To produce high-level manpower that is worthy in character and sound judgment, and to apply all aspects 
          of engineering to agriculture through research and community service.
        </p>
        <img src="bg.png" alt="vision-pic" className="w-[400px] h-[300px] rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default Vision;
