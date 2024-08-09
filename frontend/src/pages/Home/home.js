import React from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/hiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <MdOutlineProductionQuantityLimits size={35} />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Regístrate</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Iniciar sesión </Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Panel de control</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* seccion princiapl */}
      <section className="container hero">
        <div className="hero-text">
          <h2>App para la gestión de tu inventario</h2>
          <p>
          Un sistema de inventario integrado en tiempo real administra de manera eficiente los productos del almacén, ofreciendo seguimiento en tiempo real e integración perfecta con los procesos comerciales, facilitando el crecimiento y el desarrollo del negocio.          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Prueba gratuita durante 1 mes</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="14K" text="Propietarios de marca" />
            <NumberText num="23K" text="Usuarios activos " />
            <NumberText num="500+" text="Socios comerciales" />
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;