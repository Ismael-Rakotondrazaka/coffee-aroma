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
    <header className="flex flex-row items-center px-3 py-5 justify-evenly max-h-24 lg:max-h-16">
      <div className="max-w-[7rem] hidden md:block">
        <img src={Logo} alt="logo" className="w-full h-full" />
      </div>

      <nav>
        <ul className="flex flex-row flex-wrap items-center justify-center gap-1 md:gap-3 lg:gap-5">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="btn max-md:!normal-case max-md:!px-3 max-md:!py-1 whitespace-nowrap"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-row items-center justify-center hidden gap-5 lg:flex">
        <p className="text-white">012-345-6789</p>

        <button className="btn">Get in touch</button>
      </div>
    </header>
  );
}

export default TheHeader;
