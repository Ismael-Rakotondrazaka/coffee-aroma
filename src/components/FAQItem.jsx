import { useMemo } from "react";
import PlusIcon from "../assets/images/icons/plus.svg";
import MinusIcon from "../assets/images/icons/minus.svg";

function QuestionItem(props) {
  const icon = useMemo(() => (props.isOpened ? MinusIcon : PlusIcon));

  const clickHandler = () => {
    if (props.isOpened) {
      props.closeFAQ();
    } else {
      props.openFAQ(props.id);
    }
  };

  const buttonClass = useMemo(() => {
    let result = "w-7 box-content py-4 px-5";

    if (!props.isOpened) {
      result += " bg-brown-light";
    }

    return result;
  });

  return (
    <li className="w-full mb-5 border-2 rounded-lg bg-brown-medium last:mb-0 border-brown-light">
      <div className="flex flex-row items-stretch justify-between">
        <h2 className="p-5 font-bold text-white uppercase">{props.question}</h2>

        <button onClick={clickHandler}>
          <img src={icon} alt="" className={buttonClass} />
          <span className="sr-only">Expand</span>
        </button>
      </div>

      {props.isOpened && <p className="p-5 text-white">{props.response}</p>}
    </li>
  );
}

export default QuestionItem;
