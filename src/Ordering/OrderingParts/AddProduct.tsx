import React, { useContext } from "react";

import { OverlayPanel } from 'primereact/overlaypanel';

import { AddProdOverlayBody } from './AddProdOverlayBody'
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


type Props = {
  op: React.LegacyRef<OverlayPanel>
}

export const AddProduct: React.FC<Props> = ({ op }): JSX.Element => {


  const {
    customerList,
    chosen, setChosen,
  } = useContext<ToggleInterface>(ToggleContext)


  return (

    <OverlayPanel ref={op} id="overlay_panel" style={{ width: '300px' }} className="overlaypanel-demo">

      <BasicContainer>
        <AddProdOverlayBody customerList={customerList} chosen={chosen} setChosen={setChosen} />
      </BasicContainer>

    </OverlayPanel>


  );
};
