import { useState } from "react";
import FAQList from "./FAQList";
import SectionTitle from "./SectionTitle";

function TheFAQ() {
  const [faqs] = useState([
    {
      id: 1,
      question: "How do I set up an office coffee station for my company?",
      response:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sunt iusto et! Velit cum numquam, fugiat asperiores error similique at, architecto fugit ducimus sed sit, voluptas dolor voluptatem nam itaque.",
    },
    {
      id: 2,
      question: "What flavors should I get?",
      response:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem et architecto alias! Facere assumenda praesentium accusantium. Repellendus quaerat tenetur eaque.",
    },
    {
      id: 3,
      question: "How can I improve office coffee?",
      response:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iste omnis ratione a unde possimus nostrum eligendi earum molestias doloremque. Dolorem, voluptas ea! Nostrum reiciendis eligendi odit tempora sit fuga suscipit, placeat sapiente! Delectus quod hic adipisci ratione debitis ullam atque enim necessitatibus impedit unde, accusantium tempore odio ipsam iusto!",
    },
    {
      id: 4,
      question: "How do coffee machines work in an office?",
      response:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ex, est saepe repudiandae quidem natus eaque eius esse sed tempore qui dignissimos, amet sunt nemo voluptate debitis deserunt! Facere enim optio repellendus perspiciatis sunt fugit omnis, voluptate tempora, neque corporis saepe beatae labore dolorum. Ratione?",
    },
    {
      id: 5,
      question: "How much does an office coffee machine cost?",
      response:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ex sed error assumenda at reiciendis ut iste facilis repellendus, nisi blanditiis, deserunt reprehenderit suscipit. Veniam blanditiis, facere molestiae laboriosam, voluptate molestias temporibus ipsam in tempore iste perspiciatis, neque porro quaerat.",
    },
  ]);

  return (
    <div className="min-h-screen px-3 py-20">
      <SectionTitle>Common customer questions</SectionTitle>

      <FAQList faqs={faqs} />
    </div>
  );
}

export default TheFAQ;
