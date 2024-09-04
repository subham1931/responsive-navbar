import { useState } from "react";
import { FaUser, FaArrowRight } from "react-icons/fa";
import logo from "./assets/bugbear_logo-removebg-preview.png";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const menuOptions = {
    Home: ["Option 1", "Option 2", "Option 3"],
    About: ["Option A", "Option B"],
    Services: ["Service 1", "Service 2", "Service 3"],
    Contact: ["Contact Form", "Feedback"],
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="flex flex-col min-h-[100vh] text-white bg-gradient-to-b from-black to-sky-900">
      <nav className="flex justify-between items-center p-4 container mx-auto">

        <div className="flex items-center">

          <div className="block lg:hidden mr-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >

              <svg
                className={`fill-current h-5 w-5 transition-transform duration-300 ease-in-out ${isOpen ? "hidden" : "block"
                  }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>

              <svg
                className={`fill-current h-3 w-3 transition-transform duration-300 ease-in-out ${isOpen ? "block" : "hidden"
                  }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>


          <div className="flex items-center flex-shrink-0 text-white">
            <img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
          </div>
        </div>


        <div
          className={`w-full lg:w-auto flex-grow lg:flex lg:flex-grow-0 justify-end items-center space-x-4 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"
            }`}
        >
          <ul
            className={`flex flex-col lg:flex-row bg-gray-800 lg:bg-transparent p-4 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-4 transition-transform duration-300 ease-in-out ${isOpen
              ? "fixed inset-0 top-[64px] w-3/4 lg:relative lg:w-auto lg:h-auto lg:top-0"
              : "hidden lg:flex"
              }`}
          >
            {Object.keys(menuOptions).map((item, index) => (
              <li
                key={index}
                className="relative text-white-200 border rounded-xl py-2 px-4 border-[rgba(255,255,255,0.4)] hover:bg-white/10 hover:border-white cursor-pointer"
                onClick={() => handleMenuClick(item)}
              >
                <div className="flex items-center justify-between">
                  <span>{item}</span>

                  <svg
                    className={`fill-current h-4 w-4 transition-transform duration-300 ease-in-out lg:hidden ${activeMenu === item ? "rotate-180" : "rotate-0"
                      }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
                {activeMenu === item && (
                  <ul className="absolute left-0 lg:-left-10 top-full mt-2 w-full lg:w-[200px] bg-gray-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out z-10">
                    {menuOptions[item].map((option, idx) => (
                      <li key={idx} className="py-2 px-4 hover:bg-gray-600">
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>


          <div className="hidden lg:flex space-x-4">
            <button className="block text-black border rounded-xl py-2 px-4 font-semibold bg-yellow-200 border-[rgba(255,255,255,0.4)] hover:bg-yellow-300 flex items-center justify-between">
              <span>Find a Job</span>
              <FaUser className="ml-2 text-black" />
            </button>
            <button className="block text-white-200 border rounded-xl py-2 px-4 border-[rgba(255,255,255,0.4)] hover:bg-white/10 hover:border-white flex items-center justify-between">
              <span>Hire Now</span>
              <FaArrowRight className="ml-2 text-white" />
            </button>
          </div>
        </div>

        <div className="flex space-x-4 lg:hidden ml-4">
          <div className="flex items-center justify-center text-black bg-yellow-200 border rounded-xl py-2 px-4 border-[rgba(255,255,255,0.4)] hover:bg-yellow-300">
            <FaUser className="text-black text-xl cursor-pointer" title="Find a Job" />
          </div>
          <div className="flex items-center justify-center text-white border rounded-xl py-2 px-4 border-[rgba(255,255,255,0.4)] hover:bg-white/10 hover:border-white">
            <FaArrowRight className="text-white text-xl cursor-pointer" title="Hire Now" />
          </div>
        </div>

      </nav>
    </div>
  );
}
