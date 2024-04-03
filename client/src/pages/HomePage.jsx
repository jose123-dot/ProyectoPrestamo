import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="bg-red-500 flex justify-center items-center">
      <header className="bg-zinc-800 p-10">
        <h1 className="text-5xl py-2 font-bold">Solicita tu Prestamo Ahora</h1>
        <p className="text-md text-slate-400">
          ¡Bienvenido a nuestra plataforma de préstamos en línea! Aquí en
          MAJOJOLEFA, entendemos que a veces necesitas un impulso financiero
          rápido y conveniente. Nuestro proceso de solicitud simple y seguro te
          permite acceder a préstamos de manera fácil y sin complicaciones. Ya
          sea que necesites cubrir gastos inesperados, realizar una inversión
          importante o simplemente desees consolidar deudas, estamos aquí para
          ayudarte. Con tasas competitivas y términos flexibles, estamos
          comprometidos a brindarte la mejor experiencia posible de préstamos en
          línea. ¡Comienza hoy mismo y haz realidad tus proyectos financieros
          con nosotros
        </p>

        <Link
          className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
          to="/register"
        >
          Ver mas
        </Link>
      </header>
    </section>
  );
}

export default HomePage;
