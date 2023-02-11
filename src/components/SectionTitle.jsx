function SectionTitle(props) {
  return (
    <h1 className="mb-5 text-4xl font-bold text-center text-white uppercase md:mb-7 lg:mb-10">
      {props.children}
    </h1>
  );
}

export default SectionTitle;
