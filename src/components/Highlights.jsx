import {Image} from '@shopify/hydrogen';

import headphone_headphones from '../images/headphone_headphones.png';
import music_headphones from '../images/music_headphones.png';

export default function Highlights() {
  return (
    <div className="Highlights h-5/6 mt-16 mb-16">
      <h1 className="text-black text-center text-3xl sm:text-4xl w-10/12 sm:w-full font-bold m-auto mb-5">
        This Weeks Highlights
      </h1>
      <p className="m-auto w-9/12 lg:w-[525px] text-black text-left lg:text-center mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <div className="Highlights__tiles lg:flex justify-center w-5/6 m-auto">
        <div className="Highlights__tiles-tile lg:w-1/2 lg:m-4">
          <div className="Highlights__tiles-tile-content xl:flex bg-[#f0d5ef] w-full">
            <div className="text-content lg:w-2/4 lg:pl-6 mb-10 lg:mb-0">
              <h2 className="super-heading text-black xl:text-xl 2xl:text-2xl xl:mt-12">
                Headphone
              </h2>
              <h1 className="heading text-black font-bold text-4xl xl:text-4xl 2xl:text-6xl my-4">
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
              className="image w-auto m-auto lg:w-auto lg:h-52 xl:h-auto xl:ml-auto xl:mr-0 2xl:mr-auto"
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
        <div className="Highlights__tiles-tile lg:w-1/2 lg:m-4">
          <div className="Highlights__tiles-tile-content xl:flex bg-[#dff7f6] w-full">
            <div className="text-content lg:w-2/4 lg:pl-6 mb-10 lg:mb-0">
              <h2 className="super-heading xl:text-xl 2xl:text-2xl text-black xl:mt-12 lg:w-max">
                Up to 35% OFF
              </h2>
              <h1 className="heading text-black font-bold text-4xl xl:text-4xl 2xl:text-6xl my-4">
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
              className="image w-auto m-auto lg:w-auto lg:h-52 xl:h-auto xl:ml-auto xl:mr-0 2xl:mr-auto"
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
