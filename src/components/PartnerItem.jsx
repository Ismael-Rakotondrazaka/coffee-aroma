function PartnerItem(props) {
  return (
    <li className="flex flex-row items-center justify-center max-w-xs p-3 transition-colors border-2 rounded-lg md:p-5 bg-brown-medium border-brown-light hover:bg-brown-light">
      <div className="h-[22rem]">
        <img src={props.imgSrc} alt="" className="object-cover w-full h-full" />
      </div>
    </li>
  );
}

export default PartnerItem;
