import { useState } from "react";
import ScrollEffect from "./components/ScrollEffect";
import Loader from "./components/Loader";
import Carousel from "./components/Carousel";
import Sidebar from "./components/Sidebar";
import Stepper from "./components/Steper";

const components = [
  { name: "Scroll Effect", component: <ScrollEffect /> },
  { name: "Loader", component: <Loader /> },
  { name: "Carousel", component: <Carousel /> },
  { name: "Stepper", component: <Stepper /> },
];

const App = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "2rem" }}>
        <div style={{ marginBottom: "2rem", display: "flex", gap: "1rem" }}>
          {components.map((item, idx) => (
            <button
              key={item.name}
              onClick={() => setSelected(idx)}
              style={{
                padding: "0.5rem 1rem",
                background: selected === idx ? "#007bff" : "#eee",
                color: selected === idx ? "#fff" : "#333",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <section>
          <h2>{components[selected].name}</h2>
          {components[selected].component}
        </section>
      </main>
    </div>
  );
};

export default App;
