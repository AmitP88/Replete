import hero_bg from '../images/hero_bg.png';

export default function Hero() {
  const hero_bg_properties = {
    backgroundImage: `url(${hero_bg}), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`,
    backgroundBlendMode: `overlay`,
  };

  return (
    <div
      className="hero h-[25rem] md:h-[50rem] w-full bg-cover bg-no-repeat bg-left-top flex items-center justify-center"
      style={hero_bg_properties}
    >
      <div className="hero__content w-fit m-auto text-center">
        <h1 className="text-white text-3xl sm:text-5xl w-10/12 sm:w-full font-bold m-auto mb-10">
          Every product has a story
        </h1>
        <p className="m-auto w-9/12 md:w-[490px] text-white text-left mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="text-white text-xs bg-[#f81a1a] h-auto w-auto px-12 py-2">
          View More
        </button>
      </div>
    </div>
  );
}
