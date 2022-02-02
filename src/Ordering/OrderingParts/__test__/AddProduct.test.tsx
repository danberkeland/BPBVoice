/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { AddProdOverlayBody } from '../AddProdOverlayBody'


test("Add Product Overlay contains correct text", () => {
  render(<AddProdOverlayBody customerList={[]} chosen='' setChosen={jest.fn()} />);
  const text = screen.getByText("Add a Product");
  
  expect(text).toBeInTheDocument();
});