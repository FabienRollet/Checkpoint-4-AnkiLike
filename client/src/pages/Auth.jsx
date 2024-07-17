export default function LogIn() {
    return (
      <>
        <section>
          <h1 className="text-center">Connection</h1>
          <form action="" className="flex flex-col items-center flex-wrap [&>input]:border-2 [&>input]:rounded-full [&>input]:pl-6 [&>input]:my-2 [&>input]:bg-[#1d232a]">
              {/* action post ?  */}
              <label htmlFor="emailLogIn">Email</label>
              <input type="text" id="emailLogIn" placeholder="xxx@yyy.com"/>
              <label htmlFor="passwordLogIn">Mot de passe</label>
              <input type="text" id="passwordLogIn" placeholder="8 caractères minimum"/>
              <button type="submit" className="border-2 rounded-full px-5 my-6">Valider</button>
          </form>
        </section>
        <section className="border-t-4 w-[85%] mx-auto ">
          <h1 className="text-center mt-6">Inscription</h1>
          <form action="" className="flex flex-col items-center flex-wrap [&>input]:border-2 [&>input]:rounded-full [&>input]:pl-6 [&>input]:my-2 [&>input]:bg-[#1d232a]">
              {/* action get ? */}
              <label htmlFor="emailSignIn">Email</label>
              <input type="text" id="emailSignIn" placeholder="xxx@yyy.com"/>
              <label htmlFor="passwordSignIn">Mot de passe</label>
              <input type="text" id="passwordSignIn" placeholder="8 caractères minimum"/>
              <button type="submit" className="border-2 rounded-full px-5 my-6">Valider</button>
          </form>
        </section>
      </>
    );
  }
  