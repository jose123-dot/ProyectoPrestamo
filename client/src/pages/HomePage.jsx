import { Link } from "react-router-dom";
import Conversor from "../components/ConversonMoneda";

function HomePage() {
  return (
    <section className="bg-red-500 flex justify-center items-center">
      <header className="bg-zinc-800 p-10">
        <Conversor></Conversor>
        <h1 className="text-5xl py-2 font-bold">!Vamos Solicita tu Prestamo</h1>
        <p className="text-md text-slate-400">
          ¡Bienvenido a nuestra página de préstamos! En nuestro sitio, nos
          comprometemos a proporcionarte soluciones financieras flexibles y
          accesibles. Ya sea que necesites financiar un proyecto personal,
          consolidar deudas o enfrentar gastos inesperados, estamos aquí para
          ayudarte a encontrar la mejor opción de préstamo que se adapte a tus
          necesidades y circunstancias. Nuestro proceso es rápido, transparente
          y sin complicaciones, para que puedas obtener los fondos que necesitas
          cuando más los necesitas. Además, contamos con un equipo de expertos
          dispuestos a asesorarte en cada paso del camino. Explora nuestras
          opciones de préstamos hoy mismo y da el primer paso hacia tu
          estabilidad financiera.
        </p>

        <Link
          className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
          to="/solicitudpersona"
        >
          Solicitar Prestamo
        </Link>
      </header>
    </section>
  );
}

export default HomePage;
