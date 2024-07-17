import { useState } from "react";
import { Link } from "react-router-dom";

export default function Deck() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <h1 className="ml-12">Nom du paquet</h1>
      <article className="collapse relavite top-[-45px]">
        <input
          type="checkbox"
          className="hidden"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <button
          className="collapse-title text-xl font-medium flex items-center cursor-pointer"
          onClick={handleToggle}
          aria-expanded={isOpen}
          type="button"
        >
          <img
            src="src/assets/images/arow.png"
            alt="arrow"
            className={`w-5 transform transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
          />
        </button>
        {isOpen && (
          <ul className="collapse-content border-l-2">
            <li>
              <Link to="/cardsubmit">Ajouter une carte</Link>
            </li>
            <li>
              <Link to="/">Parcourir les cartes</Link>
            </li>
            <li>
              <Link to="/">Partager</Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => document.getElementById("confirm").showModal()}
              >
                Supprimer
              </button>
            </li>
          </ul>
        )}
        <dialog id="confirm" className="modal">
          <section className="modal-box">
            <h1 className="font-bold text-lg">
              Supprimer le paquet [Nom du paquet]
            </h1>
            <p className="py-4">
              Etes-vous sur de vouloir supprimer ce paquet ? Cette action est
              irréversible{" "}
            </p>
            <form method="dialog" className="flex justify-center">
              <button
                type="submit"
                className="border-2 rounded-full px-5 w-56 m-auto my-6 "
              >
                Supprimer
              </button>
            </form>
          </section>
        </dialog>
      </article>
    </section>
  );
}
