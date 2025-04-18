import { render, screen, fireEvent } from "@testing-library/react";
import { RemoveButton } from "@/components/atoms/RemoveButton";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img src="/test-image.jpg" {...props} />;
  },
}));

describe("RemoveButton", () => {
  it("renders correctly", () => {
    render(<RemoveButton onClick={() => {}} />);
    const button = screen.getByRole("img", { name: /remove/i });
    expect(button).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<RemoveButton onClick={handleClick} />);
    const button = screen.getByRole("img", { name: /remove/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
