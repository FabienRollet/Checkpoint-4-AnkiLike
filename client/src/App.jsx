import "./index.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <body>
      <Navbar />
      <Outlet />
    </body>
  );
}

export default App;
