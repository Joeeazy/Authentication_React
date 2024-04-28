import React from "react";
import "../App.css";
import Features from "../component/Features";
import Header from "../component/Header";
import Testimonials from "../component/Testimonials";
import Workflow from "../component/Workflow";
import Footer from "../component/Footer";
import Pricing from "../component/Pricing";

export default function LandingPage() {
  return (
    <div className="landingpage">
      <div className="content-wrapper">
        <div>
          <Header />
        </div>
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
