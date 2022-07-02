
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ArtistCard from "../Components/artistCard";



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

it("renders a card with artist details or 'Nothing found!' ", async () => {
  const testData ={
    "id": 510,
    "name": "Maroon 5",
    "url": "http://www.bandsintown.com/Maroon5?came_from=67",
    "image_url": "https://s3.amazonaws.com/bit-photos/large/7481529.jpeg",
    "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/7481529.jpeg",
    "facebook_page_url": "https://www.facebook.com/maroon5",
    "mbid": "0ab49580-c84f-44d4-875f-d83760ea2cfe",
    "tracker_count": 0,
    "upcoming_event_count": 0
  }
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(testData)
    })
  );

  await act(async () => {
    render(<ArtistCard artist={testData} />, container);

  });

  expect(container.querySelector("h3").textContent).toBe(testData.name);

  global.fetch.mockRestore();


});





