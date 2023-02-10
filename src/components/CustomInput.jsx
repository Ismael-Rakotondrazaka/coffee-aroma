function CustomInput(props) {
  return (
    <div className="mb-5">
      <label htmlFor={props.for} className="inline-block mb-2 text-white">
        {props.label}
      </label>
      <input
        type={props.type || "text"}
        id={props.for}
        className="block w-full p-3 text-white bg-transparent bg-white border-b-2 outline-none border-brown-light bg-opacity-10"
      />
    </div>
  );
}

export default CustomInput;
