import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Card from "./Card"

describe("Card", () => {
  it("renders without crashing", () => {
    let prop = {
      userId: 1,
      title: 'qui est esse',
      description: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    }
    render(<Card {...prop} />);
    
    expect(screen.queryByText(`User ${prop.userId}`)).toBeInTheDocument();
  });
});