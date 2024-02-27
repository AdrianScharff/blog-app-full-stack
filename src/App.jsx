import { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <main>
          <Outlet />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
