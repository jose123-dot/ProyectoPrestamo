import Conversor from "../components/ConversonMoneda";

function HomePage() {
  return (
    <section className="bg-red-500 flex justify-center items-center">
      <header className="bg-zinc-800 p-10">
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
        <br></br>
        <Conversor></Conversor>
      </header>
    </section>
  );
}

export default HomePage;
