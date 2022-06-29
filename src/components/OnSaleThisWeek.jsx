import {Image} from '@shopify/hydrogen';
import apple_monitor from '../images/apple_moniter.png';
import asus_laptops from '../images/asus_laptops.png';
import playstation from '../images/playstation.png';
import ipad from '../images/ipad.png';
import apple_watch from '../images/apple_watch.png';

export default function OnSaleThisWeek() {
  return (
    <div className="OnSaleThisWeek flex flex-col items-center justify-center py-14">
      <h1 className="text-black text-center text-3xl sm:text-4xl w-10/12 sm:w-full font-bold m-auto mb-5">
        On Sale This Week
      </h1>
      <p className="m-auto w-9/12 lg:w-[525px] text-black text-left lg:text-center mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <div className="products_container lg:w-full lg:max-w-6xl m-auto justify-center">
        <div className="top_row lg:w-full lg:max-w-6xl lg:flex m-auto justify-center my-5">
          <div className="product m-auto lg:w-full mb-10">
            <div className="w-11/12 bg-white shadow-2lg m-auto lg:mr-5 mb-6">
              <Image
                src={apple_monitor}
                width={100}
                height={100}
                className="image w-auto h-56 p-8 m-auto"
              />
            </div>
            <h4 className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left">Smart Televisions</h4>
            <p className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left text-[#f81a1a]">$55.00</p>
          </div>
          <div className="product m-auto lg:w-full mb-10">
            <div className="w-11/12 bg-white shadow-2lg m-auto lg:mr-5 mb-6">
              <Image
                src={asus_laptops}
                width={100}
                height={100}
                className="image w-auto h-56 p-8 m-auto"
              />
            </div>
            <h4 className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left">Smart Televisions</h4>
            <p className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left text-[#f81a1a]">$55.00</p>
          </div>
        </div>
        <div className="bottom_row lg:w-full lg:max-w-6xl lg:flex m-auto justify-center my-5">
          <div className="product m-auto lg:w-full mb-10">
            <div className="w-11/12 bg-white shadow-2lg m-auto lg:mr-5 mb-6">
              <Image
                src={playstation}
                width={100}
                height={100}
                className="image w-auto h-56 p-8 m-auto"
              />
            </div>
            <h4 className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left">Smart Televisions</h4>
            <p className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left text-[#f81a1a]">$55.00</p>
          </div>
          <div className="product m-auto lg:w-full mb-10">
            <div className="w-11/12 bg-white shadow-2lg m-auto lg:mr-5 mb-6">
              <Image
                src={ipad}
                width={100}
                height={100}
                className="image w-auto h-56 p-8 m-auto"
              />
            </div>
            <h4 className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left">Smart Televisions</h4>
            <p className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left text-[#f81a1a]">$55.00</p>
          </div>
          <div className="product m-auto lg:w-full mb-10">
            <div className="w-11/12 bg-white shadow-2lg m-auto lg:mr-5 mb-6">
              <Image
                src={apple_watch}
                width={100}
                height={100}
                className="image w-auto h-56 p-8 m-auto"
              />
            </div>
            <h4 className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left">Smart Televisions</h4>
            <p className="font-bold text-center lg:w-11/12 lg:m-auto lg:text-left text-[#f81a1a]">$55.00</p>
          </div>
        </div>
      </div>
      <button className="text-white text-xs font-bold bg-[#f81a1a] h-auto w-fit px-12 py-2">
        View All Products
      </button>
    </div>
  );
}
