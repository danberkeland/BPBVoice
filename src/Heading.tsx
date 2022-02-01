import React from "react";


import styled from "styled-components";

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  padding: 0;
  margin: auto;
  margin-bottom: 60px;
  color: rgb(66, 97, 201);
`;

export const Heading: React.FC = ():JSX.Element => {
    return(
        <Title>Back Porch Bakery</Title>
    )
    
}