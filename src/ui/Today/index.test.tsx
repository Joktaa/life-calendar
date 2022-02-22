import { render } from "@testing-library/react";

import Today from "./index";

describe(`${Today.name}`, () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Today />);
    expect(asFragment()).toMatchSnapshot();
  });
});
