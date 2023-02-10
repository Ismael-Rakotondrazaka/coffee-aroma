import ServiceItem from "./ServiceItem";

function ServiceList(props) {
  return (
    <ul className="flex flex-row items-stretch justify-evenly">
      {props.services.map((service, i) => (
        <ServiceItem imgSrc={service.imgSrc} text={service.text} key={i} />
      ))}
    </ul>
  );
}

export default ServiceList;
