import logo from "../assets/logo.jpeg";
import { navItems } from "../constraints/Index";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <h1 className="font-bold text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              Fit Spotter
            </h1>
          </div>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <h4>Gym Features</h4>
            <h4>Gym Locations</h4>
            <h4>Gym Pricing</h4>
            <h4>Testimonials</h4>
          </div>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <button className="btn btn-outline btn-warning mr-4">
              Create an account
            </button>
            <button className="btn btn-outline btn-error">Login</button>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-gradient-to-r text-xl text-black from-slate-400 to-slate-300 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li>Gym Features</li>
              <li>Gym Locations</li>
              <li>Gym Pricing</li>
              <li>Testimonials</li>
            </ul>
            <div className="flex space-x-6 mt-4">
              <button className="btn btn-outline btn-warning mr-4">
                Create an account
              </button>
              <button className="btn btn-outline btn-error">
                <a href="http://127.0.0.1:5173/login">Login</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
