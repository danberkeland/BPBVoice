import React, { useState } from 'react';


import { ProgressSpinner } from 'primereact/progressspinner';

import styled from 'styled-components'

const LoaderSetup = styled.div`
    width: 100%;
    margin: 45vh auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    `

const LoaderBack = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 199;
    background-color:rgba(65, 64, 99, .5);
    `

const Loader = () => {


    return (
        
            <React.Fragment>
                <LoaderBack><LoaderSetup><ProgressSpinner/></LoaderSetup></LoaderBack>
            </React.Fragment>
        
    )
    
};

export default Loader

