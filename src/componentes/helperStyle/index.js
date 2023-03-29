import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
`;

export const BlockPresentation = styled.div`
    background: rgba(255,255,255,0.9);
    border: 1px solid #CCCCCC;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    height: fit-content;
    position: relative;
    padding: 20px 20px 40px 20px;
    width: 700px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333333;
`;