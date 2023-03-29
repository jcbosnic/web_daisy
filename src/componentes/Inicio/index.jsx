import React from "react";
import {  Container, BlockPresentation } from "../helperStyle"
import {
  Avatar,
  Name,
  Divider,
  Position,
  Studies
} from "./style";

const Home = () => {
  return (
    <Container>
      <BlockPresentation>
        <Avatar src="./images/avatar.png" />
        <Name>Daisy Anaid</Name>
        <Divider />
        <Position>Psicóloga Clínica Junguiana </Position>
        <Studies>Magíster en psicología clínica Junguiana U.Mayor.</Studies> 
      </BlockPresentation>
    </Container>
  );
};

export default Home;
