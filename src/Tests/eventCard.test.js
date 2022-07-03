import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import EventCard from "../Components/Events/eventCard";



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

it("renders all the event details of given artist or 'Nothing found!' ", async () => {
  const testData = [
    {
      "id": "13722599",
      "artist_id": "438314",
      "url": "http://www.bandsintown.com/event/13722599?app_id=foo&artist=Skrillex&came_from=67",
      "on_sale_datetime": "2017-03-01T18:00:00",
      "datetime": "2017-03-19T11:00:00",
      "description": "This is a description",
      "venue": {
        "name": "Encore Beach Club",
        "latitude": "36.12714",
        "longitude": "-115.1629562",
        "city": "Las Vegas",
        "region": "NV",
        "country": "United States"
      },
      "offers": [
        {
          "type": "Tickets",
          "url": "http://www.bandsintown.com/event/13722599/buy_tickets?app_id=foo&artist=Skrillex&came_from=67",
          "status": "available"
        }
      ],
      "lineup": [
        "string"
      ]
    }
  ]
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(testData)
    })
  );

  await act(async () => {
    render(<EventCard eventData={testData} />, container);

  });

  expect(container.querySelector("#id"+testData[0].id).textContent).toContain(testData[0].venue.name);
  expect(container.querySelector(".download-container").textContent).toContain("Buy Ticket");


  global.fetch.mockRestore();


});





