import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filter from "../Filter";

describe("Filter", () => {
  test("should be able to change value of favorite select", () => {
    render(<Filter />);

    const select = screen.getByLabelText(/favorite/i);
    expect(select.value).toBe("Any");
  });

  test("should be able to change value of favorite select", () => {
    render(<Filter />);

    // initially the filter is set to any
    const select = screen.getByLabelText(/favorite/i);
    expect(select.value).toBe("Any");

    // user selects Favorite, we expect value to be Favorite
    userEvent.selectOptions(select, "Favorite");
    expect(select.value).toBe("Favorite");

    // user selectes Not Favorite, we expect value to be Not Favorite
    userEvent.selectOptions(select, "Not Favorite");
    expect(select.value).toBe("Not Favorite");
  });

  test("should be able to change value of gender select", () => {
    render(<Filter />);

    // initially the filter is set to any
    const select = screen.getByLabelText(/gender/i);
    expect(select.value).toBe("Any");

    // user selects Favorite, we expect value to be Favorite
    userEvent.selectOptions(select, "Male");
    expect(select.value).toBe("Male");

    // user selectes Not Favorite, we expect value to be Not Favorite
    userEvent.selectOptions(select, "Female");
    expect(select.value).toBe("Female");
  });
});
