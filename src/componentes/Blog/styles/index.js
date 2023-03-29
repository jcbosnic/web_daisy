import styled from "styled-components";

export const ContaierRecomedation = styled.div`
  border-bottom: 1px solid #CCCCCC;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 10px 0  20px 0;
  width: 100%;
`;

export const ContainerBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
`

export const ImgRecomendation = styled.img`
  height: 100px;
  margin: 5px;
  width: 100px;
`;

export const BlockInfoRecomendation = styled.div`
 display: flex;
 flex-direction: column;
`;

export const NameRecomendation = styled.p`
  box-sizing: border-box;
  color: #333333;
  font-weight: bold;
  font-size: 17px;
  padding: 0 10px;
`;

export const DateRecomendation = styled.p`
   color: #333333;
   font-weight: bold;
   font-size: 15px;
   font-style: italic;
   padding: 0 10px;
`;

export const DescriptionRecomendation = styled.p`
  box-sizing: border-box;
  color: #000000;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  padding: 10px;
`;