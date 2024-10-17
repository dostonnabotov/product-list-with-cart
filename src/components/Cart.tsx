import { useState } from "react";
import { CartItemProps } from "../props";
import CartItem from "./CartItem";
import Button from "./Button";
import styles from "./Cart.module.scss";
import Icons from "./Icons";

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
    <aside className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Your Cart (0)</h2>

      <ul className={styles.cartItems} role="list">
        {cartItems.map((item) => (
          <CartItem key={item.name} {...item} />
        ))}
      </ul>
      <div className={styles.orderTotal}>
        <p>Order Total</p>
        <p className={styles.priceTotal}>$46.50</p>
      </div>
      <div className={styles.highlight}>
        {Icons.CarbonNeutral}
        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>
      <Button>Confirm Order</Button>
    </aside>
  );
};

export default Cart;
