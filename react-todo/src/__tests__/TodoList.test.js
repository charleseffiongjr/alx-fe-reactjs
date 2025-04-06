import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList component", () => {
  test("renders the initial demo todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Master React Router")).toBeInTheDocument();
  });

  test("adds a new todo item", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/add new todo/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);

    const todoText = screen.getByText("Learn React");
    expect(todoText).not.toHaveClass("line-through");

    fireEvent.click(todoText);
    expect(todoText).toHaveClass("line-through");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);

    const todoToDelete = screen.getByText("Build a Todo App");
    const deleteButton = todoToDelete.nextSibling;

    fireEvent.click(deleteButton);
    expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
  });
});


test("allows user to add a new todo via input and button click", () => {
  render(<TodoList />);

  // Simulate user typing into the input
  const input = screen.getByPlaceholderText(/add new todo/i);
  fireEvent.change(input, { target: { value: "Write unit tests" } });

  // Simulate form submission by clicking the "Add" button
  const addButton = screen.getByText(/add/i);
  fireEvent.click(addButton);

  // Expect the new todo to appear in the list
  expect(screen.getByText("Write unit tests")).toBeInTheDocument();
});

test("toggles a todo item between completed and not completed", () => {
  render(<TodoList />);

  const todoText = screen.getByText("Learn React");

  // Initially should NOT be completed
  expect(todoText).not.toHaveClass("line-through");

  // Click to toggle to completed
  fireEvent.click(todoText);
  expect(todoText).toHaveClass("line-through");

  // Click again to toggle back to not completed
  fireEvent.click(todoText);
  expect(todoText).not.toHaveClass("line-through");
});

test("deletes a todo item when the delete button is clicked", () => {
  render(<TodoList />);

  // Verify the todo is initially present
  const todoText = screen.getByText("Build a Todo App");
  expect(todoText).toBeInTheDocument();

  // Find the delete button (next to the todo) and click it
  const deleteButton = todoText.nextSibling;
  fireEvent.click(deleteButton);

  // After deletion, the todo should no longer be in the document
  expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
});
