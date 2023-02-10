import FAQItem from "./FAQItem";
import { useState, useMemo } from "react";

function FAQList(props) {
  const [faqOpenedId, setFaqOpenedId] = useState(-1);

  const openFAQ = (id) => {
    setFaqOpenedId(id);
  };

  const closeFAQ = () => {
    setFaqOpenedId(-1);
  };

  const faqsFormatted = useMemo(() =>
    props.faqs.map((faq) => ({
      ...faq,
      isOpened: faq.id === faqOpenedId,
    }))
  );

  return (
    <ul className="w-full max-w-2xl mx-auto">
      {faqsFormatted.map((faq) => (
        <FAQItem
          question={faq.question}
          response={faq.response}
          key={faq.id}
          id={faq.id}
          openFAQ={openFAQ}
          closeFAQ={closeFAQ}
          isOpened={faq.isOpened}
        />
      ))}
    </ul>
  );
}

export default FAQList;
