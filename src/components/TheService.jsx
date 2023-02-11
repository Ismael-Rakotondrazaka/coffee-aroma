import SectionTitle from "./SectionTitle.jsx";
import IllustrationCoffeeTea from "../assets/images/illustrations/illustration-coffee-tea.jpg";
import IllustrationBrewer from "../assets/images/illustrations/illustration-brewer.webp";
import IllustrationPlace from "../assets/images/illustrations/illustration-place.jpeg";
import IllustrationFood from "../assets/images/illustrations/illustration-food.webp";

import { useState } from "react";
import ServiceList from "./ServiceList.jsx";

function TheService(props) {
  const [services] = useState([
    {
      text: "Coffee and Tea",
      imgSrc: IllustrationCoffeeTea,
      href: "#",
    },
    {
      text: "Brewers Equipment",
      imgSrc: IllustrationBrewer,
      href: "#",
    },
    {
      text: "Event and Place",
      imgSrc: IllustrationPlace,
      href: "#",
    },
    {
      text: "Food and Beverage",
      imgSrc: IllustrationFood,
      href: "#",
    },
  ]);

  return (
    <div className="min-h-screen px-3 py-20">
      <SectionTitle>Our service</SectionTitle>

      <ServiceList services={services} />
    </div>
  );
}

export default TheService;
