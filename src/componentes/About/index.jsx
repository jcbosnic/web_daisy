import React from 'react'
import { Container, BlockPresentation, Title } from "../helperStyle"
import { PresentationBlock, ImgAboutAvatar, BlockInfo, BlockInfoText } from "./style"  

const About = () => {
  return (
    <Container>
      <BlockPresentation>
        <PresentationBlock>
           <ImgAboutAvatar src="./images/avatar.png" />
            <BlockInfo>
              <Title>Sobre Mí</Title>
              <BlockInfoText>
              Les comparto un poco de mí, soy una feliz y atareada madre de mellizos
              de 9 años que me trastornan y me enseñan día a día el camino de la maternidad.
              También soy baterista de rock y metal, amo las montañas, ríos y lagos, por  
              tanto una fan de las caminatas en nuestros hermosos parques nacionales.
              </BlockInfoText>
            </BlockInfo>
        </PresentationBlock>
      </BlockPresentation>
    </Container>
  )
}

export default About