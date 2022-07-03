import React, { useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
//import { createRoot } from 'react-dom/client';


import SearchBar from "../Components/SearchBar/searchBar";

let container = null;
//let root=null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  //root = createRoot(container);
    
});

afterEach(() => {
  // cleanup on exiting
   unmountComponentAtNode(container);
   container.remove();
   container = null;
  //root.unmount();
  container=null;

});

it("renders the search bar ", () => {
  const testData = "foo bar";

  act(() => {
    render(<SearchBar searchTerm={testData} />, container);
    //root.render(<SearchBar searchTerm={testData} />);

  });

  expect(container.querySelector("#searchbar").value).toBe(testData);
});
