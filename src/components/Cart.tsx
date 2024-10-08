import { useState } from "react";
import { CartItemProps } from "../props";
import CartItem from "./CartItem";

const sampleData: CartItemProps[] = [
  {
    name: "Waffle with Berries",
    price: 6.5,
    count: 1,
  },
  {
    name: "Waffle with Berries",
    price: 5.5,
    count: 3,
  },
  {
    name: "Waffle with Berries",
    price: 7.0,
    count: 4,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>(sampleData);

  return (
    <>
      <h2>Your Cart (0)</h2>
      <div>
        <p>Order Total</p>
        <p>$46.50</p>
      </div>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.name} {...item} />
        ))}
      </ul>
      <div>
        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>
      <button>Confirm Order</button>
    </>
  );
};

export default Cart;
