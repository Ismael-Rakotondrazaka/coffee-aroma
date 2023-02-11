import PartnerItem from "./PartnerItem";

function PartnerList(props) {
  return (
    <ul className="flex flex-row flex-wrap items-stretch justify-center gap-3">
      {props.partners.map((partner, i) => (
        <PartnerItem imgSrc={partner.imgSrc} key={i} />
      ))}
    </ul>
  );
}

export default PartnerList;
