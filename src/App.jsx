import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/About";
import bg_image from "../src/assets/Mask group.png";
import Services from "./pages/Services";
import OurClientsSection from "./pages/ClientsSection";
import ClientsAndContact from "./pages/ContactUs";
import Carousel from "./pages/Carousel";
import DashboardCard from "./components/DashboardCard";

export default function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed "
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <Navbar />
      <main className="pt-[72px] sm:pt-[72px]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<OurClientsSection />} />
          <Route path="/contact" element={<ClientsAndContact />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/blog-cards" element={<DashboardCard />} />
        </Routes>
      </main>
    </div>
  );
}
