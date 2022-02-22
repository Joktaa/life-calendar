import { render } from "@testing-library/react";

import Years from "./index";

describe(`${Years.name}`, () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Years />);
    expect(asFragment()).toMatchSnapshot();
  });
});
