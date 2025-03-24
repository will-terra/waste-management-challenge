import { render, screen, fireEvent } from "@testing-library/react";
import { RemoveButton } from "@/components/atoms/RemoveButton";

describe("RemoveButton", () => {
    it("renders correctly", () => {
        render(<RemoveButton onClick={() => { }} />);
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
