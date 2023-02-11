import Logo from "../assets/images/logos/logo.svg";
import LogoFacebook from "../assets/images/logos/logo-facebook.svg";
import LogoInstagram from "../assets/images/logos/logo-instagram.svg";
import LogoTwitter from "../assets/images/logos/logo-twitter.svg";
import LogoYoutube from "../assets/images/logos/logo-youtube.svg";

import { useState } from "react";

function TheFooter() {
  const [socialLinks] = useState([
    {
      text: "Facebook link",
      href: "#",
      imgSrc: LogoFacebook,
    },
    {
      text: "Instagram link",
      href: "#",
      imgSrc: LogoInstagram,
    },
    {
      text: "Twitter link",
      href: "#",
      imgSrc: LogoTwitter,
    },
    {
      text: "Youtube link",
      href: "#",
      imgSrc: LogoYoutube,
    },
  ]);

  const [quickLinks] = useState([
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
      text: "Contact us",
      href: "/contact",
    },
  ]);

  const [contacts] = useState([
    "012-345-6789",
    "www.coffee-aroma.com",
    "200 Imagi Nation",
    "Fict Ifs 3302",
  ]);

  return (
    <footer className="">
      <div className="flex flex-row flex-wrap items-start px-3 gap-y-10 justify-evenly py-7 border-y-2 border-brown-light">
        <div className="px-3">
          <div className="max-w-[7rem] mx-auto mb-7">
            <img src={Logo} alt="logo" className="w-full h-full" />
          </div>

          <div className="flex flex-row items-center gap-5 mx-auto w-fit">
            {socialLinks.map((link, i) => (
              <a href={link.href} key={i}>
                <img
                  src={link.imgSrc}
                  alt=""
                  className="box-content p-2 text-white transition-colors border-2 border-white rounded-full w-7 h-7 hover:bg-brown-light hover:border-brown-light"
                />

                <span className="sr-only">{link.text}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="px-3 min-w-[15rem]">
          <h2 className="mb-2 text-lg font-bold text-white uppercase">
            Quick link
          </h2>

          <ul>
            {quickLinks.map((link, i) => (
              <li key={i} className="mb-1 last:mb-0">
                <a
                  href={link.href}
                  className="text-white uppercase hover:text-brown-light"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-3 min-w-[15rem]">
          <h2 className="mb-2 text-lg font-bold text-white uppercase">
            Contact
          </h2>

          <ul>
            {contacts.map((contact, i) => (
              <li key={i} className="mb-1 last:mb-0">
                <p
                  href=""
                  className="inline-block text-white uppercase hover:text-brown-light"
                >
                  {contact}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-xs px-3">
          <h2 className="mb-2 text-lg font-bold text-white uppercase">
            Subscribe newsletter
          </h2>

          <p className="mb-3 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            doloremque voluptate earum consectetur ipsam totam repellat illum ad
            hic commodi.
          </p>

          <div className="flex flex-row items-stretch">
            <input
              type="email"
              name=""
              placeholder="Enter your email"
              id=""
              className="w-full p-3 text-white border-2 border-r-0 outline-none bg-brown-medium placeholder:text-white/60 rounded-l-md border-brown-light"
            />

            <button className="p-3 text-white bg-brown-light rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <p className="px-3 py-5 text-center text-white">
        Copyright &copy; Aroma Coffee
      </p>
    </footer>
  );
}

export default TheFooter;
