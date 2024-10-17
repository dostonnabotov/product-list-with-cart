import Cart from "./components/Cart";
import DessertsList from "./components/DessertsList";
import "./styles/main.scss";
import styles from "./App.module.scss";

const App = () => {
  return (
    <main className={styles.container}>
      <section className={styles.dessertsContainer}>
        <h1 className={styles.title}>Desserts</h1>
        <DessertsList />
      </section>
      <Cart />
    </main>
  );
};

export default App;
