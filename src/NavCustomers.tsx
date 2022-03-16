import React, { useState } from "react";

import { Menubar } from "primereact/menubar";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import styled from "styled-components";


const TopBar = styled.div`
  display: grid;
  grid-template-columns: 10fr;
  background-color: white;
`;

function NavCustomers() {
  const [selectedMenu, setSelectedMenu] = useState("");

  const items = [
    
  
    {
      label: "Ordering",
      icon: "pi pi-fw pi-shopping-cart",
      command: () => {
        window.location.href = "/Ordering";
      },
    },
    
    
  ];

  return (
    <div className="card">
      <TopBar>
        <Menubar model={items} />
      </TopBar>
    </div>
  );
}

export default NavCustomers;
