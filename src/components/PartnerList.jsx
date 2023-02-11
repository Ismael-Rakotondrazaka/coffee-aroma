import PartnerItem from "./PartnerItem";

function PartnerList(props) {
  return (
    <ul className="flex flex-row items-stretch justify-center">
      {props.partners.map((partner, i) => (
        <PartnerItem imgSrc={partner.imgSrc} key={i} />
      ))}
    </ul>
  );
}

export default PartnerList;
