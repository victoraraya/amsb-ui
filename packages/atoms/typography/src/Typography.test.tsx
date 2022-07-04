import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Typography from "./Typography";

it("should render successfully", () => {
  const { asFragment, getByText } = render(<Typography>Hey!</Typography>);

  const typography = getByText("Hey!");

  expect(typography).toBeInTheDocument();

  expect(asFragment()).toMatchSnapshot();
});
