import {Image} from '@shopify/hydrogen';
import smart_televisions from '../images/smart_televisions.png';
import nikon_hd_camera from '../images/nikon_hd_camera.png';
import inverter_split_ac from '../images/inverter_split_ac.png';

export default function TrendingProducts() {
  return (
    <div className="TrendingProducts flex flex-col items-center justify-center pb-14">
      <h1 className="text-black text-center text-3xl sm:text-4xl w-10/12 sm:w-full font-bold m-auto mb-5">
        Trending Products
      </h1>
      <p className="m-auto w-9/12 lg:w-[525px] text-black text-left lg:text-center mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <div className="TrendingProducts__products lg:w-full lg:max-w-6xl lg:flex m-auto justify-center">
        <div className="TrendingProducts__products-product m-auto lg:w-full mb-10">
          <div className="w-11/12 bg-white shadow-2lg m-auto lg:mr-5 mb-6">
            <Image
              src={smart_televisions}
              width={100}
              height={100}
              className="image w-auto h-56 p-8 m-auto"
            />
          </div>
          <h4 className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left">Smart Televisions</h4>
          <p className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left text-[#f81a1a]">$55.00</p>
        </div>

        <div className="TrendingProducts__products-product m-auto lg:w-full mb-10">
          <div className="w-11/12 bg-white shadow-2lg m-auto lg:mr-5 mb-6">
            <Image
              src={nikon_hd_camera}
              width={100}
              height={100}
              className="image w-auto h-56 p-8 m-auto"
            />
          </div>
          <h4 className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left">Nikon HD Camera</h4>
          <p className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left text-[#f81a1a]">$45.00</p>
        </div>

        <div className="TrendingProducts__products-product m-auto lg:w-full mb-10">
          <div className="w-11/12 bg-white shadow-2lg m-auto mb-6">
            <Image
              src={inverter_split_ac}
              width={100}
              height={100}
              className="image w-auto h-56 p-8 m-auto"
            />
          </div>
          <h4 className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left">Inverter Split AC</h4>
          <p className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left text-[#f81a1a]">$68.00</p>
        </div>
      </div>

      <button className="text-white text-xs font-bold bg-[#f81a1a] h-auto w-fit px-12 py-2">
        View All Products
      </button>
    </div>
  );
}
