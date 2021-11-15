import {render, screen} from "@testing-library/react"
import Header from "../Header"

// getBy -> if present returns matching node , if not present returns descriptive error
// queryBy -> if present returns matching node , if not present returns null
// findBy -> returns a Promise that is resolved when found a match and rejected when no element is found or more than one element is found after a default timeout of 1000ms
// findAllBy,queryAllBy,getAllBy -> to get multiple values


// 8 Queries -> byRole , byText , byLabelText , byPlaceholderText , byTitle , byAltText , byDisplayValue , byTestId

// with getByRole
test('display value as passed prop', () => {
    render(<Header title={'testing'}/>);
    const headingElement = screen.getByRole('heading', {level: 1});
    expect(headingElement).toBeInTheDocument();
})

// with queryByText and "not" assertion
it('should render same text passed into title prop', () => {
    render(
        <Header title={"todo"}/>
    );
    const h1Element = screen.queryByText(/dogs/i);
    expect(h1Element).not.toBeInTheDocument();
});

// with getByTitle
it('should render same text passed into title prop - getByTitle', () => {
    render(
        <Header title={"todo"}/>
    );
    const h1Element = screen.getByTitle(/todo/i);
    expect(h1Element).toBeInTheDocument();
});

// with findByTestId

it('should render same text passed into title prop - findByTestId', async() => {
    render(
        <Header title={"todo"}/>
    );
    const h1Element = await screen.findByTestId(/heading-1/i);
    expect(h1Element).toBeInTheDocument();
});