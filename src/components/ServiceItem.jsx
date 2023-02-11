import ChevronIcon from "../assets/images/icons/chevron-right.svg";

function ServiceItem(props) {
  return (
    <li className="w-full md:w-[clac(50% - 1rem)] lg:w-1/4 max-w-sm p-2 lg:mr-3 transition-colors border-2 rounded-lg bg-brown-medium border-brown-light hover:bg-brown-light last:mr-0">
      <div className="h-[22rem]">
        <img
          src={props.imgSrc}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <h2 className="my-5 text-lg font-bold text-center text-white uppercase">
        {props.text}
      </h2>

      <button className="block mx-auto my-3 w-fit">
        <img
          src={ChevronIcon}
          alt=""
          className="box-content p-2 text-white transition-colors border-2 border-white rounded-full w-7 h-7"
        />
      </button>
    </li>
  );
}

export default ServiceItem;
