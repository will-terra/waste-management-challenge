import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MainHeader } from "@/components/atoms/MainHeader";

describe("MainHeader Component", () => {
  test("renders correctly", () => {
    render(<MainHeader />);

    const header = screen.getByText("Choose your Skip");
    expect(header).toBeInTheDocument();
  });
});
