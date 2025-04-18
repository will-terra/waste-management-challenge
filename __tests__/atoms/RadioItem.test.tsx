import { render, screen } from "@testing-library/react";
import { RadioItem } from "@/components/atoms/RadioItem";

describe("RadioItem Component", () => {
  it("should render the RadioItem component", () => {
    render(<RadioItem value={true} checked={false} label="Test Label" />);
    const buttonElement = screen.getByRole("radio");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should apply the correct variant based on the checked prop", () => {
    const { rerender } = render(
      <RadioItem value={true} checked={true} label="Checked Label" />,
    );
    let buttonElement = screen.getByText("Checked Label");
    expect(buttonElement).toHaveClass("bg-lightBlue");

    rerender(
      <RadioItem value={true} checked={false} label="Unchecked Label" />,
    );
    buttonElement = screen.getByText("Unchecked Label");
    expect(buttonElement).toHaveClass("bg-lightGray");
  });
});
