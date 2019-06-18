import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import App from "./App";
import { fireEvent } from "@testing-library/react/dist";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without errors", () => {
    render(<App />);
  });

  it("renders hello world", () => {
    const queries = render(<App />);

    queries.getByText(/hello world/i);
  });

  describe("Greet Btn", () => {
    it("says hello on button click", () => {
      const { getByText, queryByText } = render(<App />);
      // find button
      const button = getByText(/greet/i);
      //click it
      fireEvent.click(button);
      //test that "hello developers" renders
      expect(queryByText(/hello developers/i)).toBeTruthy();
    });
  });
});
