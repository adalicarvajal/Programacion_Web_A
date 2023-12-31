import React from 'react'
import styled from 'styled-components'

export const Phase6 = ({children, estado, cambiarEstado}) => {
  return (
    <>

        {estado && 
        <Overlay>
          <Contenido>
            <Encabezado>
              <h3>Transportes</h3>
            </Encabezado>
          <BotonCerrar onClick={() =>cambiarEstado(false)}>X</BotonCerrar>
          {children}
          </Contenido>
        </Overlay>
        }
    </>
  )
}

const Overlay = styled.div`
    width= 100vw;
    height= 100vh;
    position= fixed;
    top=0;
    left=0;
    background=rgba(0, 0, 0, .5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Contenido = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative; 
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111,0.2) 0px 7px 29px 0px;
    padding: 20px;
`;

const Encabezado = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3{
      font-weight: 500;
      font-size: 16px;
      color: #1766DC;
    }

`;

const BotonCerrar = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover{
      background: #f2f2f2;
    }
`;
