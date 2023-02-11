import IllustrationCoffeeSplash from "../assets/images/illustrations/illustration-coffee-splash.png";

function TheWelcome() {
  return (
    <div className="flex flex-row flex-wrap items-center min-h-screen px-3 py-20 -mt-16 md:flex-nowrap gap-y-5 justify-evenly">
      <div>
        <h1 className="mb-5 text-2xl text-white uppercase md:text-4xl md:mb-7">
          <span className="text-4xl md:text-6xl">Coffee</span>
          <br />
          service for office
          <br />
          breakrooms and
          <br />
          free delivery
        </h1>

        <button className="btn">Shop now</button>
      </div>

      <div className="max-w-md md:max-w-lg">
        <img src={IllustrationCoffeeSplash} alt="" className="w-full h-full" />
      </div>
    </div>
  );
}

export default TheWelcome;
