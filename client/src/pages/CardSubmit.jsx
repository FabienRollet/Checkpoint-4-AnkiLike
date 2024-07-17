import { useRef } from "react";

export default function CardSubmit() {
  const fileInputRef = useRef(null);

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.info("Fichier sélectionné :", file);
  };
  return (
    <main className="w-[95%] mx-auto ">
      <h1 className="text-center mt-6 font-bold">Ajouter une carte</h1>
      <form
        action=""
        className="flex flex-col flex-wrap [&>textarea]:border-2 [&>textarea]:rounded-xl [&>textarea]:pl-6 [&>textarea]:my-2 [&>textarea]:bg-[#1d232a] [&>textarea]:w-full [&>textarea]:h-28 [&>textarea]:placeholder:italic [&>textarea]:"
      >
        <label htmlFor="emailSignIn" className="w-full pl-2 pt-5">
          Recto
        </label>
        <button
          type="button"
          className="self-end relative top-[-32px] mb-[-32px] "
          onClick={handleUpload}
        >
          <img
            src="src\assets\images\media.png"
            className="w-10 block"
            alt="Télécharger un média"
          />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <textarea
          type="text"
          id="emailSignIn"
          placeholder="Entrez votre question ici..."
        />
        <label
          htmlFor="passwordSignIn"
          className="border-t-4 w-full pl-2 mt-10 pt-5"
        >
          Verso
        </label>
        <button
          type="button"
          className="self-end relative top-[-32px] mb-[-32px] "
          onClick={handleUpload}
        >
          <img
            src="src\assets\images\media.png"
            className="w-10 block"
            alt="Télécharger un média"
          />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <textarea
          type="text"
          id="passwordSignIn"
          placeholder="Entrez votre réponse ici..."
        />
        <button
          type="submit"
          className="border-2 rounded-full px-5 w-56 m-auto my-6"
        >
          Ajouter au paquet
        </button>
      </form>
    </main>
  );
}
