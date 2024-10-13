import styles from "./Buttons.module.scss";
import Icons from "./Icons";
import { useState } from "react";

const AddToCartBtn = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className={styles.addCartContainer}>
      {count === 0 ? (
        <button onClick={incrementCount} className={styles.addCart}>
          {Icons.AddToCart}
          <span>Add to Cart</span>
        </button>
      ) : (
        <div className={styles.addCartFunctions}>
          <button onClick={incrementCount}>{Icons.Increment}</button>
          <span>{count}</span>
          <button onClick={decrementCount}>{Icons.Decrement}</button>
        </div>
      )}
    </div>
  );
};

export default AddToCartBtn;
