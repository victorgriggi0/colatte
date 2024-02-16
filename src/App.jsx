import "./global.css";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Card } from "./components/Card";

const cards = [
  {
    id: 1,
    workspace: {
      imageUrl: "https://via.placeholder.com/500",
      name: "Card 1",
    },
  },
  {
    id: 2,
    workspace: {
      imageUrl: "https://via.placeholder.com/500",
      name: "Card 2",
    },
  },
  {
    id: 3,
    workspace: {
      imageUrl: "https://via.placeholder.com/500",
      name: "Card 3",
    },
  },
];

export function App() {
  return (
    <div>
      <Navbar />
      <Header />

      <section className={styles.ourSectors}>
        <h2>our sectors</h2>
        <div>
          {cards.map((card) => {
            return <Card />;
          })}
        </div>
      </section>
    </div>
  );
}
