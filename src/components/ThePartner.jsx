import PartnerList from "./PartnerList";
import SectionTitle from "./SectionTitle";
import IllustrationPartner1 from "../assets/images/illustrations/illustration-partner-1.jpg";
import IllustrationPartner2 from "../assets/images/illustrations/illustration-partner-2.webp";
import IllustrationPartner3 from "../assets/images/illustrations/illustration-partner-3.jpg";

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
    <div className="min-h-screen px-3 py-20">
      <SectionTitle>Authorized distributor coffee brands</SectionTitle>

      <PartnerList partners={partners} />
    </div>
  );
}

export default ThePartner;
