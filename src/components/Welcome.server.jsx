/*
import {
  useShop,
  useShopQuery,
  flattenConnection,
  Link,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';
*/

import {Suspense} from 'react';

import Hero from './Hero';
import Highlights from './Highlights';
import TrendingProducts from './TrendingProducts';
import Banner from './Banner';

/**
 * A server component that displays the content on the homepage of the Hydrogen app
 */

/*

function Hero() {
  return (
    <div className="Hero">
      <h1>Every product has a story</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button>View More</button>
    </div>
  );
}

*/
export default function Welcome() {
  return (
    <div className="Welcome">
      <Suspense>
        <Hero />
        <Highlights />
        <TrendingProducts />
        <Banner />
      </Suspense>
    </div>
  );
}

/*

const QUERY = gql`
  query welcomeContent($language: LanguageCode)
  @inContext(language: $language) {
    shop {
      name
    }
    products(first: 3) {
      edges {
        node {
          handle
        }
      }
    }
    collections(first: 3) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;

 */
