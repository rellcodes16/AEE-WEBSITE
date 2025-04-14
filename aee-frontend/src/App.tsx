import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./generalUI/AppLayout";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/contact/ContactUs";
import NewsAndEvents from "./pages/newsAndEvents/NewsAndEvents";
import "./App.css"
import StudentResources from "./pages/studentResources/StudentResources";
import StaffDirectory from "./pages/staff/Staff";
import Excos from "./pages/executives/Excos";
import NewsDetails from "./pages/newsAndEvents/NewsDetails";
import Programs from "./pages/programs/Programs";
import UndergraduateDetails from "./pages/programs/UndergraduateDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/newsandevents" element={<NewsAndEvents />} />
          <Route path="/news/:slug" element={<NewsDetails />} />
          <Route path="/studentresources" element={<StudentResources />} />
          <Route path="/staff" element={<StaffDirectory />} />
          <Route path="/studentexecutives" element={<Excos />} />
          <Route path="/academicprograms" element={<Programs />} />
          <Route path="/undergraduate-details" element={<UndergraduateDetails />} />
        </Route>
        <Route path="*" element={<div className="p-10">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
