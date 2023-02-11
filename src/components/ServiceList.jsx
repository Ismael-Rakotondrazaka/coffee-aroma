import ServiceItem from "./ServiceItem";

function ServiceList(props) {
  return (
    <ul className="flex flex-row flex-wrap xl:flex-nowrap gap-x-3 lg:gap-x-[unset] gap-y-3 items-stretch justify-evenly">
      {props.services.map((service, i) => (
        <ServiceItem imgSrc={service.imgSrc} text={service.text} key={i} />
      ))}
    </ul>
  );
}

export default ServiceList;
