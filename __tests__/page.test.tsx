import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Page from "../src/app/page";
import { getAllProductsList } from "@/services/products.service";
import { productMockData } from "../__mocks__/product";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([productMockData]),
  })
) as jest.Mock;

describe("Page", () => {
  it("renders a heading", async () => {
    render(<Page />);

    const products = await getAllProductsList();
    expect(products).toEqual([productMockData]);
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  });
});
