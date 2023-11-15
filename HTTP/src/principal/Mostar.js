import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Mostrar = ({addToCart}) => {
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4000/compras");
        setViajes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(viajes);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/compras/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="books">
        {viajes.map((viaje) => (
          <div key={viaje.cod_bl} className="book">
            <h2>{viaje.fecha_viaje}</h2>
            <h2>{viaje.asientosDispo_viaje}</h2>
            <h2>{viaje.costo_bol}</h2>
            <span>{viaje.horario_bol}</span>
            <h2>{viaje.horaDisp_frec}</h2>
            <span>{viaje.cedula_cl}</span>
            <span>{viaje.id_frecuencia}</span>
            <span>{viaje.id_transporte}</span>
            <button className="delete" onClick={() => handleDelete(viaje.cod_bl)}>Eliminar</button>
            <button className="update">
               
                    <Link
                    to={`/update/${viaje.cod_bl}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Actualizar
                  </Link>
              
            </button>
            <button class="button" onClick={() => addToCart(viaje.cod_bl)}>Agregar</button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Añadir Nuevo Transporte
        </Link>
      </button>
    </div>
  );
};

export default Mostrar;