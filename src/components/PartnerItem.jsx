function PartnerItem(props) {
  return (
    <li className="flex flex-row items-center justify-center max-w-xs p-5 mr-3 transition-colors border-2 rounded-lg border-brown-light last:mr-0 hover:bg-brown-light">
      <div className="h-[22rem]">
        <img src={props.imgSrc} alt="" className="object-cover w-full h-full" />
      </div>
    </li>
  );
}

export default PartnerItem;
