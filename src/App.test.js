import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';

describe("<App />", () => {
 
  test('render text input', () => {
    render(<Provider>
           <App />
      </Provider>);
 
    const inputEl = screen.getByTestId("filter-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
 
});
