import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Women from "../Women";
import userEvent from "@testing-library/user-event";
import Men from "../Men";

describe("Items are sorted based on price", () => {
  it("Sorts the items by price for women", async () => {
    const user = userEvent.setup();

    render(<Women />);
    const option = screen.getAllByRole("combobox");
    const firstItem = screen.getAllByRole("heading", { level: 3 });
    await user.selectOptions(option[0], "Low to High");
    expect(firstItem[0].textContent).toMatch("339.99€");
    await user.selectOptions(option[0], "High to Low");
    expect(firstItem[0].textContent).toMatch("2999.99€");
  });
  it("Sorts the items by price for men", async () => {
    const user = userEvent.setup();
    render(<Men />);
    const option = screen.getAllByRole("combobox");
    const firstItem = screen.getAllByRole("heading", { level: 3 });
    await user.selectOptions(option[0], "Low to High");
    expect(firstItem[0].textContent).toMatch("279.99€");
    await user.selectOptions(option[0], "High to Low");
    expect(firstItem[0].textContent).toMatch("6349.99€");
  });
});

describe("Items are sorted by brand", () => {
  it("Sorts items by brand for women", async () => {
    const user = userEvent.setup();

    render(<Women />);
    const option = screen.getAllByRole("combobox");
    const firstItem = screen.getAllByRole("heading", { level: 2 });
    await user.selectOptions(option[2], "Gucci");
    expect(firstItem[1].textContent).toMatch("Gucci");
    await user.selectOptions(option[2], "Simone Rocha");
    expect(firstItem[1].textContent).toMatch("Simone Rocha");
  });
  it("Sorts items by brend for men", async () => {
    const user = userEvent.setup();

    render(<Men />);
    const option = screen.getAllByRole("combobox");
    const firstItem = screen.getAllByRole("heading", { level: 2 });
    await user.selectOptions(option[2], "Jean Paul Gaultier");
    expect(firstItem[1].textContent).toMatch("Jean Paul Gaultier");
    await user.selectOptions(option[2], "Gucci");
    expect(firstItem[1].textContent).toMatch("Gucci");
  });
});
