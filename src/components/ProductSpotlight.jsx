import {Image} from '@shopify/hydrogen';
import mac_desktop from '../images/mac_desktop.png';

export default function ProductSpotlight() {
  return (
    <div className="ProductSpotlight bg-[#f0d5ef] flex flex-col items-center justify-center py-14">
      <h1 className="text-black text-center text-3xl sm:text-4xl w-10/12 sm:w-full font-bold m-auto mb-5">
        Product Spotlight
      </h1>
      <p>(Replace the image below with embedded video)</p>
      <div className="ProductSpotlight__product">
        <Image
          src={mac_desktop}
          width={100}
          height={100}
          className="image w-8/12 h-auto p-8 m-auto"
        />
      </div>
      <p className="m-auto w-9/12 lg:w-[525px] text-black text-left lg:text-center mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
    </div>
  );
}
