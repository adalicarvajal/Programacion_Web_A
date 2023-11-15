import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Editar = () => {
  const [transporte, setTransporte] = useState({
    numAsientos:null,
    compañia_trans:'',
    conductor_trans:'',
    placa_trans:'',
    nUnidad_trans:null,
    tipo_trans:'',
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const transporteId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setTransporte((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/compras/${transporteId}`, transporte);
      navigate("/inicio");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Actulizacion de Transporte</h1>
      <input
        type="text"
        placeholder="Numero de asientos"
        name="numAsientos"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Compañia"
        name="compañia_trans"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Conductor"
        name="conductor_trans"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Placa"
        name="placa_trans"
        onChange={handleChange}
      />
        <input
        type="text"
        placeholder="Numero de Unidad"
        name="nUnidad_trans"
        onChange={handleChange}
      />
          <input
        type="text"
        placeholder="Tipo de trasporte"
        name="tipo_trans"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">Ver todas las rutas </Link>
    </div>
  );
};

export default Editar;