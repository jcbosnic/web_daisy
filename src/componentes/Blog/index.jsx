import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, BlockPresentation, Title } from "../helperStyle";
import Menu from '../Menu';

import { ContaierRecomedation,
         ImgRecomendation, 
         BlockInfoRecomendation, 
         NameRecomendation, 
         DateRecomendation, 
         DescriptionRecomendation,
         ContainerBlock
      } from './styles'


 const URL = "./database/user.json";  

const Blog = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get(URL)
    .then( res => setData(res.data))
    .catch( err => console.log(err));
  }, []);

  return (
<Container>
      <Menu />
  <BlockPresentation>
<ContainerBlock>
      <Title>Recomendation</Title>
      {
        data.map((item, index) => (
          <ContaierRecomedation key={index}>
            <ImgRecomendation src={item.avatar} alt={item.name} />
            <BlockInfoRecomendation>
              <NameRecomendation>{item.name}</NameRecomendation>
              <DateRecomendation>{item.date}</DateRecomendation>
              <DescriptionRecomendation>{item.description}</DescriptionRecomendation>
            </BlockInfoRecomendation>
          </ContaierRecomedation>
        ))
      }
    </ContainerBlock> 
      </BlockPresentation>
</Container>
  )
}

export default Blog