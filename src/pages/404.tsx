import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Pagina nao encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para o{" "}
        <Link to={"/"} className="text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
