import { render } from "@testing-library/react";

import Weeks from "./index";

describe(`${Weeks.name}`, () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Weeks />);
    expect(asFragment()).toMatchSnapshot();
  });
});
