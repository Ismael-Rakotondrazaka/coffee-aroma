import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";

function TheLayout(props) {
  return (
    <>
      <TheHeader />

      {props.children}

      <TheFooter />
    </>
  );
}

export default TheLayout;
