import React, { useState, useRef } from "react";

import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { OverlayPanel } from 'primereact/overlaypanel';
import { InputNumber } from "primereact/inputnumber";


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

const Spacer = styled.div`
  padding: 5px 5px;
  margin: auto;
`;


type Props = {
    op: React.MutableRefObject<any>
    customerList: {
        label: string;
        value: string;
    }[],
    chosen: string,
    setChosen: React.Dispatch<React.SetStateAction<string>>,
}

export const AddProduct: React.FC<Props> = ({ op, customerList, chosen, setChosen }): JSX.Element => {


  return (
    
      <OverlayPanel ref={op} showCloseIcon id="overlay_panel" style={{ width: '300px' }} className="overlaypanel-demo">
        <BasicContainer>
          <Spacer>Add a Product</Spacer>
          <Spacer>
          <Dropdown value={chosen} options={customerList} onChange={e => setChosen(e.value)} placeholder="Select a Customer" />
          </Spacer>
          <Spacer>
          <InputNumber
            value={3}
            size={3}
            buttonLayout="horizontal"
            incrementButtonIcon='pi pi-plus'
            decrementButtonIcon='pi pi-minus'
            showButtons
          />
          </Spacer>
          <Spacer>TOTAL: $22.90</Spacer>
          <Spacer>
          <Button label="ADD" icon="pi pi-plus" iconPos="right" className="p-button-raised p-button-rounded p-button-success"/>
          </Spacer>
          
        </BasicContainer>

      </OverlayPanel>
     
  );
};
