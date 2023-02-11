import PartnerList from "./PartnerList";
import SectionTitle from "./SectionTitle";
import IllustrationPartner1 from "../assets/images/illustrations/illustration-partner-1.jpg";
import IllustrationPartner2 from "../assets/images/illustrations/illustration-partner-2.webp";
import IllustrationPartner3 from "../assets/images/illustrations/illustration-partner-3.jpg";
import CoffeeSplash3 from "../assets/images/design/coffee-splash-3.png";

import { useState } from "react";

function ThePartner() {
  const [partners] = useState([
    {
      imgSrc: IllustrationPartner1,
    },
    {
      imgSrc: IllustrationPartner2,
    },
    {
      imgSrc: IllustrationPartner3,
    },
  ]);

  return (
    <div className="relative min-h-screen px-3 py-20">
      <div className="absolute bottom-[4%] right-[4%] w-full max-w-sm">
        <img src={CoffeeSplash3} alt="" className="w-full h-full" />
      </div>

      <SectionTitle>Authorized distributor coffee brands</SectionTitle>

      <PartnerList partners={partners} />
    </div>
  );
}

export default ThePartner;
