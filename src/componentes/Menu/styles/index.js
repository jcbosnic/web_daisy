import styled from "styled-components";


export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto auto 40px auto;
  width: 90%;
`;

export const ContainerMenuItem = styled.p`
  color: #333333;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border-width: 20%;
  position: relative;

  &::before {
    border-bottom: 1px solid #e04a4a;
    bottom: -5px;
    content: "";
    height: 1px;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: absolute;
    width: 70%;
  }

  &:hover::before {
    border-bottom: 3px solid #e04a4a;
  }
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
