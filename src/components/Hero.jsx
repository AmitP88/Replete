import hero_bg from '../images/hero_bg.png';
import {Image} from '@shopify/hydrogen';

export default function Hero() {
  const hero_bg_properties = {
    backgroundImage: `url(${hero_bg})`,
    width: '100%',
    height: '50%',
  };

  return (
    <div className="Hero" style={hero_bg_properties}>
      <h1>Every product has a story</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button>View More</button>
    </div>
  );
}
