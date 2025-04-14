import { JSX } from "react";

function History(): JSX.Element {
  return (
    <section className="relative w-full min-h-screen flex flex-col text-white overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('bg.png')" }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-full bg-green-800/80 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full flex justify-center items-center py-12">
        <h1 className="text-4xl font-bold mb-8">Our History</h1>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6 md:p-12">
        <img
          src="hero-pic-2.png"
          alt="mission-pic"
          className="w-[320px] md:w-[360px] rounded-3xl shadow-2xl border border-white/30"
        />
        <p className="text-white text-justify leading-loose text-lg md:text-xl backdrop-blur-sm">
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
