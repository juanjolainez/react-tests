import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders hello world as a text", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // ..nothing for this one

    // Assert
    const helloWorld = screen.getByText("Hello World", { exact: false });
    expect(helloWorld).toBeInTheDocument();
  });

  test("renders good to see you", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // ..nothing for this one

    // Assert
    const helloWorld = screen.getByText("It's good to see you!");
    expect(helloWorld).toBeInTheDocument();
  });

  test("renders changed after button click", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // ..nothing for this one
    const button = screen.getByRole('button');
    userEvent.click(button);

    // Assert
    const helloWorld = screen.getByText("Changed!");
    expect(helloWorld).toBeInTheDocument();
  });

  test("does not render it's good to see you", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // ..nothing for this one
    const button = screen.getByRole('button');
    userEvent.click(button);

    // Assert
    const helloWorld = screen.queryByText("It's good to see you", {exact: false});
    expect(helloWorld).toBeNull();
  });

  test("renders good to see you after double button click", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // ..nothing for this one
    const button = screen.getByRole('button');
    userEvent.click(button);
    userEvent.click(button);
    
    // Assert
    const helloWorld = screen.getByText("It's good to see you!");
    expect(helloWorld).toBeInTheDocument();
  });
});
