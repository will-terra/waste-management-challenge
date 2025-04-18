/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { ResponsiveHandler } from "@/components/utils/ResponsiveHandler";
import { setIsMobile } from "@/lib/features/skips/skipsSlice";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("@/lib/features/skips/skipsSlice", () => ({
  setIsMobile: jest.fn(),
}));

describe("ResponsiveHandler", () => {
  let dispatchMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should detect mobile vs desktop based on window width", () => {
    global.innerWidth = 768;
    render(<ResponsiveHandler />);
    expect(dispatchMock).toHaveBeenCalledWith(setIsMobile(true));

    jest.clearAllMocks();

    global.innerWidth = 1024;
    render(<ResponsiveHandler />);
    expect(dispatchMock).toHaveBeenCalledWith(setIsMobile(false));
  });

  test("should update on window resize", () => {
    render(<ResponsiveHandler />);

    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));
    expect(dispatchMock).toHaveBeenCalledWith(setIsMobile(true));

    global.innerWidth = 1024;
    global.dispatchEvent(new Event("resize"));
    expect(dispatchMock).toHaveBeenCalledWith(setIsMobile(false));
  });

  test("should not dispatch setIsMobile in server-side environment", () => {
    jest.clearAllMocks();
    render(<ResponsiveHandler isServerSide={true} />);
    expect(dispatchMock).not.toHaveBeenCalled();
  });
});
