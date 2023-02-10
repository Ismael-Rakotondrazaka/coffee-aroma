import Logo from "../assets/images/logos/logo.svg";

import { useState } from "react";

function TheHeader() {
  const [links] = useState([
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Service",
      href: "/service",
    },
    {
      text: "FAQS",
      href: "/faqs",
    },
    {
      text: "Contact us",
      href: "/contact",
    },
  ]);

  return (
    <header className="py-5 px-3 flex flex-row items-center justify-evenly">
      <div className="max-w-[7rem]">
        <img src={Logo} alt="logo" className="w-full h-full"/>
      </div>

      <nav>
        <ul className="flex flex-row items-center justify-center gap-5">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="btn">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-row items-center justify-center gap-5">
        <p className="text-white">012-345-6789</p>

        <button className="btn">Get in touch</button>
      </div>
    </header>
  );
}

export default TheHeader;
