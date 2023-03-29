import React from "react";
import {
  ContainerMenu,
  ContainerMenuItem,
  SocialLink,
  SocialContainer,
  SocialImg
} from "./styles";
import { Link } from "react-router-dom";

import ReactWhatsapp from 'react-whatsapp';


const Menu = () => {
  return (
    <ContainerMenu>
      <div className="nav">
      <input type="checkbox" />
        <span></span>
        <span></span>
        <div className="titleMenu">MENÚ</div>

        <div className="menu">
          <Link to="/">
            <ContainerMenuItem>Inicio</ContainerMenuItem>
          </Link>
          <Link to="/about">
            <ContainerMenuItem>Sobre Mi</ContainerMenuItem>
          </Link>
          <Link to="/service">
            <ContainerMenuItem>Mi Acompañamiento</ContainerMenuItem>
          </Link>
          <Link to="/blog">
            <ContainerMenuItem>Blog</ContainerMenuItem>
          </Link>
          <Link to="/contact">
            <ContainerMenuItem>Asesorate</ContainerMenuItem>
          </Link>
          <SocialContainer>
            <SocialImg />
            <SocialLink>
              <ReactWhatsapp style={{ border: 'none', background: 'none', height: '27px', width: '27px', cursor: 'pointer' }} number="+56995111604" message="Me interesa mas detalles de la consulta." />
            </SocialLink>
          </SocialContainer>
        </div>

      </div>
    </ContainerMenu>

  );
};

export default Menu;
