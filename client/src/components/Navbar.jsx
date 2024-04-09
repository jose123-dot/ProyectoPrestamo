import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/" : "/"}>MAJOJOLEFA</Link>
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>{`${user.nombre} ${user.apellido} `}</li>
            <li>
              <ButtonLink to="/solicitudpersona">Solicitar Prestamo</ButtonLink>
            </li>

            <li>
              <Link
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                to="/"
                onClick={() => logout()}
              >
                Cerrar Sesion
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login">Iniciar Sesion</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Registrarse</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
