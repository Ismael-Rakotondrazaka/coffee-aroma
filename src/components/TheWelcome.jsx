import IllustrationCoffeeSplash from "../assets/images/illustrations/illustration-coffee-splash.png";

function TheWelcome(props) {
  return (
    <div className="flex flex-row items-center min-h-screen px-3 py-20 -mt-16 justify-evenly">
      <div>
        <h1 className="text-4xl text-white uppercase mb-7">
          <span className="text-6xl">Coffee</span>
          <br />
          service for office
          <br />
          breakrooms and
          <br />
          free delivery
        </h1>

        <button className="btn">Shop now</button>
      </div>

      <div className="w-lg">
        <img src={IllustrationCoffeeSplash} alt="" className="w-full h-full" />
      </div>
    </div>
  );
}

export default TheWelcome;
