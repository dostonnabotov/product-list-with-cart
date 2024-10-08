import React from "react";
import { CartItemProps } from "../props";

const CartItem: React.FC<CartItemProps> = ({ name, price, count }) => {
  return (
    <li>
      <div>
        <h3>{name}</h3>
        <p>
          <b>{count}x</b>
          {"  "}
          <span>@ ${price.toFixed(2)}</span>
          {"  "}
          <b>{(count * price).toFixed(2)}</b>
        </p>
      </div>
      <button>x</button>
    </li>
  );
};

export default CartItem;
