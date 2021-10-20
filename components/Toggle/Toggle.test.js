import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import Toggle from "./Toggle"

describe("Toggle", () => {
  it("renders without crashing", () => {
    let prop = {
      label: "Testing",
      value: true,
      onChange: () => {}
    }
    render(<Toggle {...prop} />);
    
    expect(screen.queryByText(`${prop.label}`)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("toggle-change"));
  });
});