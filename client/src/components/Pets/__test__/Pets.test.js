import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pets from "../Pets";
import { rest } from "msw";
import { setupServer } from "msw/node";
import catsMock from "../../../mocks/cats.json";

const server = setupServer(
  rest.get("http://localhost:400/cats", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(catsMock));
  })
);

beforeEach(() => render(<Pets />));
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Pets", () => {
  test("should render the correct amount of cards", async () => {
    render(<Pets />);
    const cards = await screen.findAllByRole("article");
    expect(cards.length).toBe(5);
  });

  test("should filter for male cats", async () => {
    const cards = await screen.findAllByRole("article");

    //user selects male filter
    userEvent.selectOptions(screen.getByLabelText(/gender/i), "Male");

    const maleCards = screen.getAllByRole("article");
    expect(maleCards).toStrictEqual([cards[1], cards[3]]);
  });

  test("should filter for female cats", async () => {
    const cards = await screen.findAllByRole("article");

    //user selects female filter
    userEvent.selectOptions(screen.getByLabelText(/gender/i), "Female");

    const femaleCards = screen.getAllByRole("article");
    expect(femaleCards).toStrictEqual([cards[0], cards[2], cards[4]]);
  });

  test("should filter for favorited cats", async () => {
    const cards = await screen.findAllByRole("article");
    userEvent.click(within(cards[0]).getByRole("button"));
    userEvent.click(within(cards[3]).getByRole("button"));
    userEvent.selectOptions(screen.getByLabelText(/favorite/i), "Favorite");
    expect(screen.getAllByRole("article")).toStrictEqual([cards[0], cards[3]]);
  });

  test("should filter for not favorited cats", async () => {
    const cards = await screen.findAllByRole("article");
    userEvent.click(within(cards[0]).getByRole("button"));
    userEvent.click(within(cards[3]).getByRole("button"));
    userEvent.selectOptions(screen.getByLabelText(/favorite/i), "Not Favorite");
    expect(screen.getAllByRole("article")).toStrictEqual([
      cards[1],
      cards[2],
      cards[4],
    ]);
  });

  test("should filter for favorited male cats", async () => {
    const cards = await screen.findAllByRole("article");
    userEvent.click(within(cards[0]).getByRole("button"));
    userEvent.click(within(cards[3]).getByRole("button"));

    userEvent.selectOptions(screen.getByLabelText(/favorite/i), "Favorite");
    userEvent.selectOptions(screen.getByLabelText(/gender/i), "Male");

    expect(screen.getAllByRole("article")).toStrictEqual([cards[3]]);
  });
});
