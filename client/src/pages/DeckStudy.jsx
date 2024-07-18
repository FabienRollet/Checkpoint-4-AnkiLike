import { useState } from "react";

export default function DeckReview() {
  const [isRevealed, setIsRevealed] = useState(false);
  const handleReveal = () => setIsRevealed(true);
  const [level, setLevel] = useState(0);
  const increaseLevel = () => {
    setLevel((prevLevel) => (prevLevel < 8 ? prevLevel + 1 : 8));
  };

  const resetLevel = () => {
    setLevel(0);
  };

  const getButtonText = (levelDate) => {
    switch (levelDate) {
      case 0:
        return "1j.";
      case 1:
        return "2j.";
      case 2:
        return "4j.";
      case 3:
        return "8j.";
      case 4:
        return "12j.";
      case 5:
        return "1m.";
      case 6:
        return "2.4m.";
      case 7:
        return "5m.";
      case 8:
        return "11m.";
      default:
        return "1j.";
    }
  };

  return (
    <main className="mx-auto flex flex-col min-h-screen">
      <section className="grow pt-2 flex flex-col items-center">
        <p className=" text-center w-[80%] pb-5">Quelle est la différence entre les tags &lt;ol&gt; et &lt;ul&gt; ?</p>
        <p
          className={`border-t-2 w-[80%] text-center pt-5 ${isRevealed ? "" : "hidden"}`}
        >
          &lt;ol&gt; : Crée une liste ordonnée avec des numéros, &lt;ul&gt; : Crée une liste non ordonnée avec des puces
        </p>
      </section>
      <section className="sticky bottom-0 flex justify-around flex-wrap border-t-2 ">
        <button
          className={`w-full absolute top-[0px] bg-darkColor z-10 h-16 ${isRevealed ? "hidden" : ""}`}
          type="button"
          onClick={handleReveal}
        >
          Afficher la réponse
        </button>
        <button
          className="grow border-r h-16 mb-2"
          onClick={resetLevel}
          type="submit"
        >
          10 min. <br />
          Encore
        </button>
        <button
          className="grow border-l h-16"
          onClick={increaseLevel}
          type="submit"
        >
          {getButtonText(level)} <br />
          Correct
        </button>
      </section>
    </main>
  );
}
