import React from 'react'
import { Container, BlockPresentation, Title } from "../helperStyle";
import Menu from '../Menu';

import { ContaierRecomedation,
         ImgRecomendation, 
         BlockInfoRecomendation, 
         NameRecomendation, 
         DateRecomendation, 
         DescriptionRecomendation 
      } from './styles'


const Blog = () => {
  return (
<Container>
  <BlockPresentation>
      <Title>Recomendation</Title>
      <ContaierRecomedation>
        <ImgRecomendation src="./images/foto1.png" />
        <BlockInfoRecomendation>
          <NameRecomendation>
            Nombre Usuario
          </NameRecomendation>
          <DateRecomendation>
            Fecha de pubicación
          </DateRecomendation>
          <DescriptionRecomendation>
              Muy recomendada profesional, me encanta como aborda la terapia 
              con distintas técnicas  gracias a sus múltiples especializaciones, 
              además no es de los típicos psicólogos que solo escuchan y miran el reloj.
              1000% recomendada, me encanta!
          </DescriptionRecomendation>
        </BlockInfoRecomendation>
      </ContaierRecomedation>
      <Menu />
  </BlockPresentation>
</Container>
  )
}

export default Blog