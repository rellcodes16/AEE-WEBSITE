import { JSX } from "react";
import Footer from "../../generalUI/Footer";
import History from "./History";
import Mission from "./Mission";
import Vision from "./Vision";

function AboutUs(): JSX.Element {
  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 py-10 space-y-10">
        <Mission />
        <Vision />
        <History />
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
