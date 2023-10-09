import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Emend from "./Emend"; //importar los componentes
import Checkup from "./Checkup";
import Buy from "./Buy";
import Sell from "./Sell";
import Funds from "./Funds";
import Statuslist from "./Statuslist";
import "../styles.css"; //estilos-hoja general


const Menu = (props) => {
  //ayudan a controlar el estado de los componentes llamados
  const [emend, setEmend] = useState("");
  const [checkup, setCheckup] = useState("");
  const [buy, setBuy] = useState("");
  const [sell, setSell] = useState("");
  const [funds, setFunds] = useState("");
  const [status, setStatus] = useState("");

  //Para las opciones del menu principal
  function op_emend() {
    setEmend("1");
    setCheckup("0");
    setBuy("0");
    setSell("0");
    setFunds("0");
    setStatus("0");
  }

  function op_checkup() {
    setEmend("0");
    setCheckup("1"); //Visible en pantalla
    setBuy("0");
    setSell("0");
    setFunds("0");
    setStatus("0");
  }

  function op_buy() {
    setEmend("0");
    setCheckup("0");
    setBuy("1");
    setSell("0");
    setFunds("0");
    setStatus("0");
  }

  function op_sell() {
    setEmend("0");
    setCheckup("0");
    setBuy("0");
    setSell("1");
    setFunds("0");
    setStatus("0");
  }

  function op_funds() {
    setEmend("0");
    setCheckup("0");
    setBuy("0");
    setSell("0");
    setFunds("1");
    setStatus("0");
  }

  function op_status() {
    setEmend("0");
    setCheckup("0");
    setBuy("0");
    setSell("0");
    setFunds("0");
    setStatus("1");
  }

  function cerrarSesion() {
    document.getElementById("caja_menu").style.display = "none";
    alert("Finalizando sesion... ¡Hasta luego!");
    document.getElementById("form_login").style.display = "block";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("pin").value = "";
  }

  return (
    <div id="caja_menu">
      <nav className="sidebar">
      <div className="logo">
        <span class="material-symbols-outlined logo" title="Logo NaiatApex">heart_minus</span>
      </div>
      
        <NavLink className="links" onClick={op_emend}>
        <li>
          <span class="material-symbols-outlined" title="Cambiar PIN">passkey</span>
        </li> 
        </NavLink>
    
        <NavLink className="links" onClick={op_checkup}>
        <li>
          <span class="material-symbols-outlined" title="Revisar Acciones">ballot</span>
        </li>
        </NavLink>
        <NavLink className="links" onClick={op_buy}>
        <li>
          <span class="material-symbols-outlined" title="Comprar Acciones">stack_star</span>
          </li>
        </NavLink>
        <NavLink className="links" onClick={op_sell}>
        <li>
          <span class="material-symbols-outlined" title="Vender Acciones">stack</span>
        </li>
        </NavLink>
        <NavLink className="links" onClick={op_funds}>
        <li>
          <span class="material-symbols-outlined" title="Depósito de Fondos">savings</span>
          </li>
        </NavLink>
        <NavLink className="links" onClick={op_status}>
        <li>
          <span class="material-symbols-outlined" title="Estado de Cuenta">table_view</span>
          </li>
        </NavLink>
        <NavLink className="links" onClick={cerrarSesion}>
        <li>
        <span class="material-symbols-outlined" title="Cerrar Sesion">logout</span>
          </li>
        </NavLink>
      </nav>
      <h2> Hola, {props.nombre} !</h2>
      <p className="indica">Por favor, elige una opción desde menú de íconos</p>
      {/*Que componentes se muestran en cada eleccion*/}
      {emend === "1" && <Emend />}
      {checkup === "1" && <Checkup />}
      {buy === "1" && <Buy />}
      {sell === "1" && <Sell />}
      {funds === "1" && <Funds />}
      {status === "1" && <Statuslist />}
    </div>
  );
};

export default Menu;
