import { useState, useEffect } from "react";
import Home from "./pages/Home";
import LoadingScreen from "./components/UI/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen done={!loading} />
      <Home />
    </>
  );
}

export default App;
