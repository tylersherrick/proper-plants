import { useState } from "react";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === plant.id);

      if (existing) {
        return prev.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...plant, quantity: 1 }];
    });
  }

  function increment(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrement(id) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <>
      <Header />

      <div className="app-layout">
        <PlantList addToCart={addToCart} />

        <Cart
          cart={cart}
          increment={increment}
          decrement={decrement}
        />
      </div>
    </>
  );
}