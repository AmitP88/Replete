import {Image} from '@shopify/hydrogen';
import news_1 from '../images/news_1.png';
import news_2 from '../images/news_2.png';
import news_3 from '../images/news_3.png';

export default function ProductNews() {
  return (
    <div className="ProductNews flex flex-col items-center justify-center py-14">
      <h1 className="text-black text-center text-3xl sm:text-4xl w-10/12 sm:w-full font-bold m-auto mb-5">
        Product News
      </h1>
      <p className="m-auto w-9/12 lg:w-[525px] text-black text-left lg:text-center mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <div className="ProductNews_news lg:w-full lg:max-w-6xl lg:flex m-auto justify-center my-5">
        <div className="ProductNews_news-block p-4">
          <Image
            src={news_1}
            width={100}
            height={100}
            className="image w-full h-auto m-auto"
          />
          <h3 className="text-black text-xl font-bold my-9">
            Lorem ipsum dolor sit amet, consectetur
          </h3>
          <p className="text-black text-sm pr-8">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia in deserunt mollit anim id est sint laborum
          </p>
        </div>
        <div className="ProductNews_news-block p-4">
          <Image
            src={news_2}
            width={100}
            height={100}
            className="image w-full h-auto m-auto"
          />
          <h3 className="text-black text-xl font-bold my-9">
            Lorem ipsum dolor sit amet, consectetur
          </h3>
          <p className="text-black text-sm pr-8">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia in deserunt mollit anim id est sint laborum
          </p>
        </div>
        <div className="ProductNews_news-block p-4">
          <Image
            src={news_3}
            width={100}
            height={100}
            className="image w-full h-auto m-auto"
          />
          <h3 className="text-black text-xl font-bold my-9">
            Lorem ipsum dolor sit amet, consectetur
          </h3>
          <p className="text-black text-sm pr-8">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia in deserunt mollit anim id est sint laborum
          </p>
        </div>
      </div>
      <button className="text-white text-xs font-bold bg-[#f81a1a] h-auto w-fit px-12 py-2">
        View All
      </button>
    </div>
  );
}
