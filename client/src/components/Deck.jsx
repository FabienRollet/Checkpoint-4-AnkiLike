import { useState } from "react";
import { Link, Form } from "react-router-dom";
import PropTypes from "prop-types";

export default function Deck({ deckName, deckId }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <Link to="/study" className="relative font-bold underline ml-12 z-10">
        {deckName}
      </Link>
      <nav className="collapse relavite top-[-46px]">
        <input
          type="checkbox"
          className="hidden"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <button
          className="collapse-title cursor-pointer"
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
              <button
                type="button"
                onClick={() => document.getElementById("update").showModal()}
              >
                Modifier le nom du paquet
              </button>
            </li>
            <li>
              <Link to="/browse">Parcourir les cartes</Link>
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
              Supprimer le paquet {deckName}
            </h1>
            <p className="py-4">
              Etes-vous sur de vouloir supprimer ce paquet ? Cette action est
              irréversible
            </p>
            <Form
              method="delete"
              className="flex justify-center"
            >
              <input type="hidden" name="deckId" value={deckId} />
              <button
                type="submit"
                className="border-2 rounded-full px-5 w-56 m-auto my-6"
              >
                Supprimer
              </button>
            </Form>
          </section>
        </dialog>
        <dialog id="update" className="modal">
          <section className="modal-box">
            <h1 className="font-bold text-lg pb-5 text-center">
              Modifier le nom du paquet : {deckName}
            </h1>
            <Form
              method="edit"
              className="flex flex-col items-center justify-center"
            >
              <input
                type="text"
                name="name"
                placeholder={deckName}
                className="border-2 border rounded-[20px] px-4"
              />
              <button
                type="submit"
                className="border-2 rounded-full px-5 w-56 m-auto my-6"
              >
                Modifier
              </button>
            </Form>
          </section>
        </dialog>
      </nav>
    </section>
  );
}
Deck.propTypes = {
  deckName: PropTypes.string.isRequired,
  deckId: PropTypes.string.isRequired,
};