import styled from "styled-components";


export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;;
  justify-content: space-around;
  width: fit-content;
`;

export const ContainerMenuItem = styled.p`
  border-width: 20%;
  color: #333333;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 30px;
  position: relative;
`;

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    position: absolute;
    top: -40px;
    right: 15px;
    width: 100px;
`


export const SocialLink = styled.div`
    background-image: url('./images/whatsapp.png');
    background-repeat: no-repeat;
    background-size: 27px 27px;
    height: 27px;
    width: 27px;
`

export const SocialImg = styled.a`
  background-image: url("./images/instagram.png");
  background-repeat: no-repeat;
  background-size: 30px 30px;
  height: 30px;
  width: 30px;
`;
