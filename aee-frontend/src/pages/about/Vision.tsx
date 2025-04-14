import { JSX } from "react";

function Vision(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">Vision</h1>
      <div className="p-10 flex flex-col md:flex-row justify-between items-center gap-10">
        <p className="text-gray-700 text-justify leading-loose text-lg md:text-xl">
          To produce high-level manpower that is worthy in character and sound judgment, and to apply all aspects
          of engineering to agriculture through research and community service.
        </p>
        <img
          src="sustainability.jpg"
          alt="vision-pic"
          className="w-[400px] h-[300px] object-cover rounded-2xl shadow-xl border border-gray-100"
        />
      </div>
    </div>
  );
}

export default Vision;
