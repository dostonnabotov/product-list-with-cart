import React from "react";
import { DessertProps } from "../props";
import AddToCartBtn from "./AddToCartBtn";
import styles from "./Dessert.module.scss";

const Dessert: React.FC<DessertProps> = ({ image, name, category, price }) => {
  return (
    <li className={styles.dessert}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image} alt={name} />
        <AddToCartBtn />
      </div>
      <p>{category}</p>
      <h3>{name}</h3>
      <p className={styles.price}>${price.toFixed(2)}</p>
    </li>
  );
};

export default Dessert;
