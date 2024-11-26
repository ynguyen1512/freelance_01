import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail"; 
import './themes/tailwind.css';
import Footer from "./components/Footer";
import HeaderPage from "./components/Header";
import BlogDetailSection2 from "./pages/BlogDetailSection2";
import BlogDetailSection3 from "./pages/BlogDetailSection3";
import BLogDetailSection4 from "./pages/BLogDetailSection4";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Router>
      <Layout className="min-h-screen bg-gray-100">
        <HeaderPage/>
        <Routes>
          {/* Define the Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/blog/section-1/:id" element={<BlogDetail />} />
          <Route path="/blog/section-2/:id" element={<BlogDetailSection2 />} />
          <Route path="/blog/section-3/:id" element={<BlogDetailSection3 />} />
          <Route path="/blog/section-4/:id" element={<BLogDetailSection4 />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;