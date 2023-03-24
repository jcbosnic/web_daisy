import styled from "styled-components";

export const ContainerForm = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 100px 0 0;
  padding: 0 40px;
  position: relative;
  width: 600px;
`;

export const Label = styled.label`
  color: #333333;
  font-weight: bold;
  font-size: 14px;
  padding: 20px 0 10px 0;
`;

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 0 40px 0;
  width: 100%;
`;

export const Input = styled.input`
  border-radius: 7px;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  height: 35px;
  padding: 20px;
  width: 100%;
`;

export const Button = styled.button`
  background: #e04a4a;
  border: none;
  border-radius: 7px;
  color: #ffffff;
  font-size: 16px;
  height: 45px;
  margin: 20px 0 0 auto;
  width: 200px;
`;

export const ErrorMessage = styled.span`
  background: #e04a4a;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  margin: 10px 0 0;
  padding: 5px 10px;
  width: 200px;
`;

export const TextArea = styled.textarea`
  border: 1px solid #cccccc;
  box-sizing: border-box;
  font-size: 14px;
  height: 150px;
  max-height: 200px;
  width: 100%;
  padding: 20px;
`
  