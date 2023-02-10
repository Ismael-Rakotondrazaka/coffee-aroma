import CustomInput from "./CustomInput";

function TheSignUp() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form method="POST" onSubmit={submitHandler}>
      <CustomInput label="Name:" for="name" />

      <CustomInput label="Last name:" for="lastName" />

      <CustomInput label="Email:" for="email" type="email" />

      <CustomInput label="Password:" for="password" type="password" />

      <input
        type="submit"
        className="btn !border-brown-light mt-3"
        value="Submit now"
      />
    </form>
  );
}

export default TheSignUp;
