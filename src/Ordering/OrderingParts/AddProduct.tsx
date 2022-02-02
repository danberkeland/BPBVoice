import React from "react";

import { OverlayPanel } from 'primereact/overlaypanel';

import { AddProdOverlayBody } from './AddProdOverlayBody'


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
          <AddProdOverlayBody customerList={customerList} chosen={chosen} setChosen={setChosen}/>    
        </BasicContainer>

      </OverlayPanel>
    
     
  );
};
