import { useState, useEffect } from "react";
import Home from "../pages/Home/Home";
import InitialScreen from "./InitialScreen";

const Main = () => {
  const [showInitialScreen, setShowInitialScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{showInitialScreen ? <InitialScreen /> : <Home />}</>;
};

export default Main;
