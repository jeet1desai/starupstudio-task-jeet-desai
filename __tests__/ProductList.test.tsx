import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { getAllProductsList } from "@/services/products.service";
import { productMockData } from "../__mocks__/product";
import Products from "@/components/ProductList";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([productMockData]),
  })
) as jest.Mock;

describe("Products Component", () => {
  beforeEach(async () => {
    await getAllProductsList();
  });

  test("renders Products component and fetches product list", async () => {
    render(<Products />);

    await waitFor(() => expect(screen.getByText("Product 1")).toBeInTheDocument());
  });

  test("toggles filter visibility", async () => {
    render(<Products />);

    await waitFor(() => expect(screen.getByText("Product 1")).toBeInTheDocument());

    fireEvent.click(screen.getByText(/Hide Filter/i));
    expect(screen.getByText(/Show Filter/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Show Filter/i));
    expect(screen.getByText(/Hide Filter/i)).toBeInTheDocument();
  });
});
