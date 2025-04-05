import { JSX } from "react";

function History(): JSX.Element {
  return (
    <section className="relative w-full min-h-screen flex flex-col text-white overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('bg.png')" }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-full bg-green-700 opacity-75"></div>

      <div className="relative z-10 w-full flex justify-center items-center py-10">
        <h1 className="text-3xl font-bold">Our History</h1>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center max-w-5xl mx-auto grid md:grid-cols-2 gap-8 p-6">
        <img src="hero-pic-2.png" alt="mission-pic" className="w-[300px] rounded-t-full shadow-lg" />
        <p className="text-white text-justify leading-relaxed w-[500px] text-lg">
          The Department, founded in 1972, has played a leading role in the development of the Faculty of Technology 
          as well as in the University. Our graduates, both at B.Sc., M.Sc., and Ph.D. levels, are working in various 
          sectors of the Nigerian economy, making positive contributions. Staff members are involved in teaching, 
          research, and community service in areas such as farm machinery, power engineering, biofuels, irrigation 
          and drainage, waste utilization, farm structures, agricultural processing, energy studies, and more. 
          The Department is well-equipped to train manpower for transforming the agro-allied sector of the Nigerian 
          economy.
        </p>
      </div>
    </section>
  );
}

export default History;
