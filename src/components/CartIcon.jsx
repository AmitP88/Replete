import {Image} from '@shopify/hydrogen';
import shopping_cart_empty_icon from '../images/shopping_cart_empty_icon.svg';

/**
 * A shared component that specifies the icon to represent a cart
 */
export default function CartIcon() {
  return (
    <Image
      src={shopping_cart_empty_icon}
      width={20}
      height={20}
      className="image"
    />
  );
}
