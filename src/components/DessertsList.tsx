import { useEffect, useState } from "react";
import Dessert from "./Dessert";
import { DessertProps } from "../props";
import styles from "./DessertList.module.scss";

const DessertsList = () => {
  const [desserts, setDesserts] = useState<DessertProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDesserts = async () => {
      try {
        const response = await fetch("/data/desserts.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: DessertProps[] = await response.json();
        setDesserts(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDesserts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul role="list" className={styles.list}>
      {desserts.map((dessert) => (
        <Dessert key={dessert.name} {...dessert} />
      ))}
    </ul>
  );
};

export default DessertsList;
