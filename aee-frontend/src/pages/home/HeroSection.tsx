import { HiMenu } from "react-icons/hi";

function HeroSection({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <section className="relative w-full min-h-screen flex flex-col text-white overflow-hidden rounded-b-[250px]">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('bg.png')" }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-full bg-green-700 opacity-75"></div>

      <div className="relative z-10 w-full flex justify-between items-center px-7 py-2 border-b border-solid border-gray-400">
        <img src="logo.png" alt="logo" className="w-[70px]" />
        <HiMenu
          className="text-3xl font-bold cursor-pointer self-center"
          onClick={toggleSidebar}
        />
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl uppercase font-bold">
            Engineering Innovation for Agriculture & Sustainability
          </h2>
          <p className="mt-4 text-lg">
            Our department integrates engineering principles with agriculture and environmental sustainability to
            develop cutting-edge solutions in precision farming, water management, and renewable energy.
          </p>
          <p className="mt-2 font-semibold text-lg">
            Join us in shaping the future of sustainable agricultural engineering.
          </p>
          <button className="mt-4 bg-white text-lg cursor-pointer text-green-700 px-4 py-2 font-semibold rounded-3xl shadow">
            Explore Our Programs
          </button>
        </div>

        <div className="relative">
          <img
            src="hero-pic-2.png"
            alt="hero-pic"
            className="max-w-md w-[320px] mx-auto rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
