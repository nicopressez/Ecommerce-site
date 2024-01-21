import { getAllByRole, queryAllByRole, render,screen, getByRole } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Women from "../Women";
import Shopitem from "../Shopitem";
import ShopTop from "../ShopTop";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("Items are sorted based on user clicks", () => {
 it("Sorts the items by price low to high", async () => {
    const user = userEvent.setup();

    render (<Women />)
    const option = screen.getAllByRole("combobox");
    const firstItem = screen.getAllByRole('heading', {level: 3})

    await user.selectOptions(option[0], "Price Low to High")

    expect(firstItem[0].textContent).toMatch("339.99€")


 })
}
)
