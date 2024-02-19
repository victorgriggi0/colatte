import "./global.css";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

const cards = [
  {
    id: 1,
    workspace: {
      imageUrl: "https://corhexa.com/png/500x500/191919",
      name: "Card 1",
    },
  },
  {
    id: 2,
    workspace: {
      imageUrl: "https://corhexa.com/png/500x500/191919",
      name: "Card 2",
    },
  },
  {
    id: 3,
    workspace: {
      imageUrl: "https://corhexa.com/png/500x500/191919",
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
            return (
              <Card
                key={card.id}
                image={card.workspace.imageUrl}
                title={card.workspace.name}
              />
            );
          })}
        </div>
      </section>

      <section className={styles.about}>
        <About />
      </section>

      <section className={styles.contact}>
        <h2>contact</h2>
        <Footer />
      </section>
    </div>
  );
}
