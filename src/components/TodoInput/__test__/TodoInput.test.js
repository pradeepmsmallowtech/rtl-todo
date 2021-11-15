import { render , screen ,fireEvent } from "@testing-library/react";
import TodoInput from "../TodoInput";

describe("TodoInput tests",() => {
    test("if we type something , value of input should change",() => {
        render(<TodoInput allTodos={[]} setAllTodos={() => {}}/>);
        const inputElement = screen.getByPlaceholderText(/Enter the task name here/i);
        fireEvent.change(inputElement,{ target : { value : "learn react-testing-library"}})
        expect(inputElement.value).toBe('learn react-testing-library');
    });

    test("should have empty value when add button is clicked",() => {
        render(<TodoInput allTodos={[]} setAllTodos={() => {}}/>);
        const inputElement = screen.getByPlaceholderText(/Enter the task name here/i);
        const buttonElement = screen.getByRole('button',{ name : /add todo/i});
        fireEvent.change(inputElement,{ target : { value : "learn react-testing-library"}})
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe('');
    })
})