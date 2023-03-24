import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 780px;
  justify-content: center;
  width: fit-content;
`;

export const BlockPresentation = styled.div`
  background: rgba(204, 204, 204, 0.4);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 400px;
  position: relative;
  width: 700px;
`;

export const Avatar = styled.img`
  outline: none;
  height: 250px;
  position: absolute;
  top: -97px;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

export const Name = styled.p`
  font-size: 35px;
  padding: 170px 0 10px;
  text-align: center;
  width: 100%;
`;

export const Divider = styled.div`
  background: #e04a4a;
  height: 1px;
  margin: 0 auto;
  width: 70%;
`;

export const Position = styled.p`
  color: #333333;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0 0;
  text-align: center;
  width: 100%;
`;

export const Studies = styled.p`
  color: #333333;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 0 0;
  text-align: center;
  width: 100%;
`

