import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Opss, algo aconteceu</h1>
      <p className="text-accent-foreground">Um erro aconteceu na aplicação</p>
      <p className="text-2xl text-accent-foreground">
        Voltar para o{" "}
        <Link to={"/"} className="text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  );
}

export default Error;
