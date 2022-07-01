import {Image} from '@shopify/hydrogen';
import envelope from '../images/envelope.png';

/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer() {
  return (
    <footer className="bg-[#020522] flex flex-col items-center justify-center pt-14 pb-7">
      <div className="lg:w-full lg:max-w-6xl m-auto my-5">
        <div className="top_row lg:flex lg:justify-between">
          <div className="address text-center lg:text-left mb-10 lg:mb-0">
            <h2 className="text-white text-2xl font-light uppercase">Replete</h2>
            <p className="text-white text-xl font-light">123 Replete street</p>
            <p className="text-white text-xl font-light">mansarover jaipur</p>
            <p className="text-white text-xl font-light">(555) 555-555</p>
          </div>
          <div className="social_media flex align-middle justify-center lg:justify-end lg:pr-32">
            <div className="icon bg-white h-7 lg:h-8 p-1 mx-2 rounded-full w-7 lg:w-full flex items-center justify-center">
              <i className="fa-brands fa-facebook-f fa-lg text-[#2a0576]"></i>
            </div>
            <div className="icon bg-white h-7 lg:h-8 p-1 mx-2 rounded-full w-7 lg:w-full flex items-center justify-center">
              <Image
                src={envelope}
                width={100}
                height={100}
                className="lg:w-10/12 h-auto text-[#2a0576]"
              />
            </div>
            <div className="icon bg-white h-7 lg:h-8 p-1 mx-2 rounded-full w-7 lg:w-full flex items-center justify-center">
              <i className="fa-brands fa-instagram fa-lg text-[#2a0576]"></i>
            </div>
            <div className="icon bg-white h-7 lg:h-8 p-1 mx-2 rounded-full w-7 lg:w-full flex items-center justify-center">
              <i className="fa-brands fa-twitter fa-lg text-[#2a0576]"></i>
            </div>
          </div>
        </div>

        <div className="bottom_row mt-12">
          <p className="text-white text-center px-3">
            Copyright &#xA9; Date Name. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
