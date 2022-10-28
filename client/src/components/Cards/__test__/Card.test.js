import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import Cards from "../Cards";
import cats from "../../../mocks/cats.json";

describe("Cards", () => {
  test("should render 5 card components", () => {
    render(<Cards cats={cats} />);

    expect(screen.getAllByRole("article").length).toBe(5);
  });
});
