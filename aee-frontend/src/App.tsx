// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./generalUI/AppLayout";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
        <Route path="*" element={<div className="p-10">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
