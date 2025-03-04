import React, { useState, useEffect} from "react";

const Header = () => {
  const [ showHeader, setShowHeader] = useState(false);

  useEffect( () => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll",handleScroll);
    };
  }, []);

  return (
    <header className= {`fixed top-0 left-0 w-full bg-vino p-4 flex items-center justify-between transition-transform duration-300 ${
      showHeader ? "translate-y-0" : "-translate-y-full"}`}>
      <nav>
        <ul className="flex gap-4 text-white font-textos">
          <li><a href="#" className="hover:text-naranja">Inicio</a></li>
          <li><a href="#" className="hover:text-naranja">Menú</a></li>
          <li><a href="#" className="hover:text-naranja">Sobre nosotros</a></li>
          <li><a href="#" className="hover:text-naranja">Contacto</a></li>
        </ul>
      </nav>
      <div className="flex items-center gap-2">
        <h1 className="text-white text-4xl font-bold font-logo">Caprice</h1>
        <img src="/2bfd5b66401be85952ea3c25116be1c5-removebg-preview.PNG" alt="Logo de la panadería" className="h-12 w-auto" />
      </div>
    </header>
  );
};

export default Header;
