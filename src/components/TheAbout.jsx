import IllustrationCoffee from "../assets/images/illustrations/illustration-coffee.png";
import SectionTitle from "./SectionTitle";

function TheAbout() {
  return (
    <div className="flex flex-row flex-wrap-reverse items-center min-h-screen px-3 py-20 justify-evenly">
      <div className="hidden max-w-lg lg:block">
        <img
          src={IllustrationCoffee}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-3 border-2 rounded-lg md:p-5 lg:p-7 border-brown-light bg-brown-medium">
        <SectionTitle className="!text-left">About us</SectionTitle>

        <p className="max-w-md mb-5 leading-8 text-white uppercase">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis
          libero impedit in a animi officia blanditiis dolorem nisi accusamus
          soluta ducimus atque consequuntur possimus minima adipisci eos dolore
          earum, saepe aspernatur dolorum eligendi, delectus iusto. Molestiae
          vel aliquam quibusdam? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Dolore, quia.
        </p>

        <button className="btn !border-brown-light">Shop now</button>
      </div>
    </div>
  );
}

export default TheAbout;
