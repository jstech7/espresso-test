import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Pagination from "./Pagination"

describe("Pagination", () => {
  it("renders without crashing", () => {
    let prop = {
      rowsPerPage: 5,
      total: 100,
      page: 1,
      onChange: () => {}
    }
    render(<Pagination {...prop} />);
    
    fireEvent.click(screen.getByTestId("navigate-to-first-page"));
    fireEvent.click(screen.getByText(prop.page));
    fireEvent.click(screen.getByTestId("navigate-to-last-page"));
  });
});