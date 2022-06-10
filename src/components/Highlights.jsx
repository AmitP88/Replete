import {Image} from '@shopify/hydrogen';

import headphone_headphones from '../images/headphone_headphones.png';
import music_headphones from '../images/music_headphones.png';

export default function Highlights() {
  return (
    <div className="Highlights h-5/6 mt-16 mb-16">
      <h1 className="text-black text-center text-3xl sm:text-4xl w-10/12 sm:w-full font-bold m-auto mb-5">
        This Weeks Highlights
      </h1>
      <p className="m-auto w-9/12 md:w-[525px] text-black text-center mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <div className="Highlights__tiles flex justify-center w-5/6 m-auto">
        <div className="Highlights__tiles-tile w-1/2 m-4">
          <div className="Highlights__tiles-tile-content flex bg-[#f0d5ef] w-full">
            <div className="text-content w-2/4 pl-6">
              <h2 className="super-heading text-2xl text-black mt-12">
                Headphone
              </h2>
              <h1 className="heading text-black font-bold text-6xl my-4">
                Music
              </h1>
              <a href="#">
                <p className="shop_now underline-offset-2 uppercase text-[#f81a1a]">
                  Shop Now
                </p>
              </a>
            </div>
            <Image
              src={music_headphones}
              width={100}
              height={100}
              className="image"
            />
          </div>
          <div className="learn__more text-center my-10">
            <h2 className="text-black font-bold text-2xl pb-4">
              Asus Headphone
            </h2>
            <a href='#'>
              <p className="text-blue-700 font-light">Learn more</p>
            </a>
          </div>
        </div>
        <div className="Highlights__tiles-tile w-1/2 m-4">
          <div className="Highlights__tiles-tile-content flex bg-[#dff7f6] w-full">
            <div className="text-content w-2/4 pl-6">
              <h2 className="super-heading text-2xl text-black mt-12">
                Up to 35% OFF
              </h2>
              <h1 className="heading text-black font-bold text-6xl my-4">
                Headphone
              </h1>
              <a href="#">
                <p className="shop_now underline-offset-2 uppercase text-[#f81a1a]">
                  Shop Now
                </p>
              </a>
            </div>
            <Image
              src={headphone_headphones}
              width={100}
              height={100}
              className="image"
            />
          </div>
          <div className="learn__more text-center my-10">
            <h2 className="text-black font-bold text-2xl pb-4">
              Asus Headphone
            </h2>
            <a href='#'>
              <p className="text-blue-700 font-light">Learn more</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
