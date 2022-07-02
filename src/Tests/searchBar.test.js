import React, { useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import SearchBar from "../Components/searchBar";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders the search bar ", () => {
  const testData = "foo bar";

  act(() => {
    render(<SearchBar searchTerm={testData} />, container);
  });

  expect(container.querySelector("#searchbar").value).toBe(testData);
});
