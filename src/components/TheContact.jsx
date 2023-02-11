import SectionTitle from "./SectionTitle";
import TheSignup from "./TheSignup";
import LogoFacebook from "../assets/images/logos/logo-facebook.svg";
import LogoInstagram from "../assets/images/logos/logo-instagram.svg";
import LogoTwitter from "../assets/images/logos/logo-twitter.svg";
import LogoYoutube from "../assets/images/logos/logo-youtube.svg";
import CoffeeSplash2 from "../assets/images/design/coffee-splash-2.png";

import { useState } from "react";

function TheContact() {
  const [contacts] = useState([
    {
      title: "Email:",
      text: "example@email.com",
    },
    {
      title: "Phone:",
      text: "012-345-6789",
    },
    {
      title: "Address:",
      text: "200 Imagi Nation\nFict Ifs 3302",
    },
  ]);

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

  return (
    <div className="relative min-h-screen px-3 py-20">
      <div className="absolute left-[10%] top-0 w-full max-w-sm z-[-1]">
        <img src={CoffeeSplash2} alt="" className="w-full h-full" />
      </div>

      <div className="w-full max-w-4xl p-5 mx-auto border-2 rounded-lg bg-brown-medium border-brown-light">
        <SectionTitle>Contact us</SectionTitle>

        <div className="flex flex-row justify-around">
          <div className="mr-3">
            <ul className="text-white">
              {contacts.map((contact, i) => (
                <li key={i} className="mb-5 last:mb-0">
                  <h2 className="mb-1 font-bold uppercase">{contact.title}</h2>

                  <p className="whitespace-pre-wrap">{contact.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-md mr-3">
            <TheSignup />
          </div>

          <div>
            <div className="flex flex-col items-center gap-5 px-5">
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
        </div>
      </div>
    </div>
  );
}

export default TheContact;
