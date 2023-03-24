import styled from "styled-components";

export const ContaierRecomedation = styled.div`
    box-sizing: border-box;

  display: flex;
  flex-direction: row;
  padding: 0 50px;
  width: 100%;
`;

export const ImgRecomendation = styled.img`
  height: 120px;
  margin: 5px;
  width: 120px;
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