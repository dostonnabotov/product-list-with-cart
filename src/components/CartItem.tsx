import React from "react";
import { CartItemProps } from "../props";
import styles from "./CartItem.module.scss";
import Icons from "./Icons";

const CartItem: React.FC<CartItemProps> = ({ name, price, count }) => {
  return (
    <li className={styles.cartItem}>
      <div>
        <h3 className={styles.itemName}>{name}</h3>
        <div className={styles.itemDetails}>
          <p className={styles.itemCount}>{count}x</p>
          <p className={styles.itemPrice}>@ ${price.toFixed(2)}</p>
          <p className={styles.itemTotal}>${(count * price).toFixed(2)}</p>
        </div>
      </div>
      <button className={styles.removeBtn}>{Icons.RemoveItem}</button>
    </li>
  );
};

export default CartItem;
