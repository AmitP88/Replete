import banner_bg from '../images/banner_bg.png';

export default function Banner() {
  const banner_bg_properties = {
    backgroundImage: `url(${banner_bg}), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`,
    backgroundBlendMode: `overlay`,
  };

  return (
    <div
      className="banner h-[25rem] md:h-[50rem] w-full bg-cover bg-no-repeat bg-left-top flex items-center justify-center"
      style={banner_bg_properties}
    >
      <div className="banner__content w-fit m-auto text-center">
        <h1 className="text-white text-3xl sm:text-5xl w-10/12 sm:w-full font-bold m-auto mb-10">Inspiring products for your life</h1>
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
