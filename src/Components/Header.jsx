import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 h-20">
      <div className="flex justify-between items-center w-full mx-auto max-w-screen-2xl px-4 md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <div>
          <a href="/" className="">
            <img src="/logo.svg" alt="Logo" />
          </a>
        </div>
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden "
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined">
                {navOpen ? 'close' : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />  
        </div>
        
          <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
            Contact me
          </a>
        </div>
      
    </header>
  );
};

export default Header;
