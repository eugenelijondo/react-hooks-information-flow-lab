import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("displays the <select> element", () => {
  render(<Filter categories={[]} onCategoryChange={() => {}} />); // Pass an empty array as categories
  expect(screen.queryByRole("combobox")).toBeInTheDocument();
});

test("calls the onCategoryChange callback prop when the <select> is changed", () => {
  const onCategoryChange = jest.fn();
  render(<Filter categories={[]} onCategoryChange={onCategoryChange} />); // Pass an empty array as categories

  fireEvent.change(screen.queryByRole("combobox"), {
    target: { value: "Dairy" },
  });
  expect(onCategoryChange).toHaveBeenCalled();
});
