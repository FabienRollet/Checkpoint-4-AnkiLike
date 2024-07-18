import { Link, useLoaderData, Form } from "react-router-dom";
import Deck from "../components/Deck";

export default function Home() {
  const deckData = useLoaderData();
  return (
    <main>
      {deckData.map((deck) => (
        <Deck key={deck.id} deckName={deck.name} deckId={deck.id} />
      ))}
      <nav className="flex flex-col text-center gap-4 sticky bottom-2 bg-darkColor z-10">
        <button
          type="button"
          className="border-2 rounded-full text-xl py-5 px-5"
          onClick={() => document.getElementById("new").showModal()}
        >
          Créer un paquet
        </button>
        <Link to="/" className="border-2 rounded-full text-xl py-5 px-5">
          Parcourir les paquets partagés
        </Link>
      </nav>
      <dialog id="new" className="modal">
        <section className="modal-box">
          <h1 className="font-bold text-lg text-center mb-4">Nom du paquet</h1>
          <Form
            method="post"
            className="flex flex-col items-center justify-center"
          >
            <input
              type="text"
              name="name"
              placeholder="Tapez ici..."
              className="border-2 border rounded-[20px] px-4"
            />
            <button
              type="submit"
              className="border-2 rounded-full px-5 w-56 m-auto my-6"
            >
              Créer
            </button>
          </Form>
        </section>
      </dialog>
    </main>
  );
}
