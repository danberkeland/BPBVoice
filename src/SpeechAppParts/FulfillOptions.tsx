import React from "react";

import { RadioButton } from 'primereact/radiobutton';

import styled from "styled-components";

const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border: 1px solid lightgray;
  padding: 10px 10px;
  margin: 10px auto 10px auto;
  box-sizing: border-box;
`;


const FulfillOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr .5fr 1fr .5fr 1fr .5fr;
  margin: 2px;
  align-items: center;
  justify-items: right;
`;

type Props = {
    route: string,
    setRoute: React.Dispatch<React.SetStateAction<string>>
}

export const Fulfill: React.FC<Props> = ({ route, setRoute }): JSX.Element => {

  return (
    

      <BasicContainer>
        <FulfillOptions>
          <label htmlFor="fulfilldeliv">Delivery</label>
          <RadioButton inputId="fulfilldeliv" name="route" value="deliv" checked={route === 'deliv'} onChange={(e) => setRoute(e.value)} />


          <label htmlFor="fulfillslo">SLO</label>
          <RadioButton inputId="fulfillslo" name="route" value="slopick" checked={route === 'slopick'} onChange={(e) => setRoute(e.value)} />

          <label htmlFor="fulfillatown">Atown</label>
          <RadioButton inputId="fulfillatown" name="route" value="atownpick" checked={route === 'atownpick'} onChange={(e) => setRoute(e.value)} />

        </FulfillOptions>
      </BasicContainer>

  );
};
