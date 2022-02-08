import React, { useContext} from "react";

import { RadioButton } from 'primereact/radiobutton';
import { ToggleContext, ToggleInterface } from "../../Contexts/ToggleContexts";

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


export const Fulfill: React.FC = (): JSX.Element => {


  const {
    route, setRoute, setIsModified
  } = useContext<ToggleInterface>(ToggleContext)

  const handleChange = (val) => {
    if (val !== route){
      setIsModified(true)
      setRoute(val)
    }
  }

  return (


    <BasicContainer>
      <FulfillOptions>
        <label htmlFor="fulfilldeliv">Delivery</label>
        <RadioButton
          inputId="fulfilldeliv"
          name="route"
          value="deliv"
          checked={route === 'deliv'}
          onChange={(e) => handleChange(e.value)} />

        <label htmlFor="fulfillslo">SLO</label>
        <RadioButton
          inputId="fulfillslo"
          name="route"
          value="slopick"
          checked={route === 'slopick'}
          onChange={(e) => handleChange(e.value)} />

        <label htmlFor="fulfillatown">Atown</label>
        <RadioButton
          inputId="fulfillatown"
          name="route"
          value="atownpick"
          checked={route === 'atownpick'}
          onChange={(e) => handleChange(e.value)} />

      </FulfillOptions>
    </BasicContainer>

  );
};
