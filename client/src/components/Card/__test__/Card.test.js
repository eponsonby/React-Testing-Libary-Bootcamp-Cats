import { render, screen } from "@testing-library/react";
import Card from "../Card";
import userEvents from "@testing-library/user-event";
import Pets, { PetsContext } from "../../PEts/Pets";
import cats from "../../../mocks/cats";

const cardProps = {
  name: "Sydney",
  phone: "111-111-111",
  email: "laith@hotmail.com",
  image: {
    url: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "cute cat",
  },
  favorited: false,
  updateFavorite: () => {},
  index: 1,
};

const renderCardComponentWithProvider = (props) => {
  render(
    <PetsContext.Provider value={{ cats, setCats: () => {} }}>
      <Card {...props} />
    </PetsContext.Provider>
  );
};
describe("Card", () => {
  test("should show name of cat", () => {
    render(<Card {...cardProps} />);

    expect(
      screen.getByRole("heading", {
        name: /sydney/i,
      })
    ).toBeInTheDocument();
  });

  test("should show phone number", () => {
    render(<Card {...cardProps} />);

    expect(screen.getByText(/111-111-111/i)).toBeInTheDocument();
  });

  test("should show phone email", () => {
    render(<Card {...cardProps} />);

    expect(screen.getByText(/laith@hotmail.com/i)).toBeInTheDocument();
  });

  test("should show image with correct src", () => {
    render(<Card {...cardProps} />);

    // check to see if there is an image and that the src value is correct
    expect(screen.getByAltText(/cute cat/i).src).toBe(cardProps.image.url);
  });

  test("should show outlined heart", () => {
    render(<Card {...cardProps} />);

    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });

  test("should show filled heart", () => {
    render(<Card {...cardProps} favorited={true} />);

    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  });

  test("should toggle heart status", () => {
    renderCardComponentWithProvider(cardProps);

    // click once
    userEvents.click(screen.getByRole("button"));
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();

    // user clicks again
    userEvents.click(screen.getByRole("button"));
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });
});
