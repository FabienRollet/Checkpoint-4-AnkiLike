import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const url = useLocation();
  return (
    <header>
      <nav className="flex flex-nowrap mx-1 mb-8 items-center justify-between">
        <Link to="/home"><img src="src\assets\images\icon.png" alt="" className="h-14" /></Link>
        {url.pathname === "/home" ? (
          <Link className="border-2 border rounded-[20px] px-4" to="/login">S'authentifier</Link>
        ) : (
          <Link className="border-2 border rounded-[20px] px-4" to={-1}><img src="src/assets/images/retour-arrow.png" alt="" className="w-8 inline" /> Retour</Link>
        )}
      </nav>
    </header>
  );
}
