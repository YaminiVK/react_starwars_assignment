import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import {render} from './test.util';

describe("<App />", () => {
  test('render app component', () => {
    // setup
    render(<App />);

    // expectation
    expect(screen.getByText(/Star Wars Assignment/i)).toBeInTheDocument();
  });
  test('should render loading state', () => {
    // setup
    render(<App />);

    // expectation
    expect(screen.getByText(/Let's wait for the Star wars universe to load/i)).toBeInTheDocument();
  });
 
  test('should render input field along with star wars universe characters', async() => {
    // setup
    render(<App />);
    const loadingState = screen.getByText(/Let's wait for the Star wars universe to load/i);
    await waitForElementToBeRemoved(loadingState);
    const name = await screen.findByText(/Leia Organa/i);

    //expectation
    expect(name).toBeInTheDocument();
    expect(screen.getByTestId("filter-input")).toBeInTheDocument();

  });

  test('should show error message when nothing is found by filter', async() => {
    // setup
    render(<App />);
    const loadingState = screen.getByText(/Let's wait for the Star wars universe to load/i);
    await waitForElementToBeRemoved(loadingState);

    //action
    userEvent.type(screen.getByTestId("filter-input"),'z');

    // expectation
    expect(screen.getByText(/Match not found/i)).toBeInTheDocument();
  });

  test('should modal on click of each character', async() => {
    // setup
    render(<App />);
    const loadingState = screen.getByText(/Let's wait for the Star wars universe to load/i);
    await waitForElementToBeRemoved(loadingState);
    const name = await screen.findByText(/Leia Organa/i);

    //action
    userEvent.click(name);

    // expectation
    expect(await screen.findByText("Let's look at the information about Leia Organa")).toBeInTheDocument();
    expect(await screen.findByText('Skin_color',{exact: false})).toBeInTheDocument();
  });

  test('should close modal on click of close button', async() => {
    // setup
    render(<App />);
    const loadingState = screen.getByText(/Let's wait for the Star wars universe to load/i);
    await waitForElementToBeRemoved(loadingState);
    const name = await screen.findByText(/Leia Organa/i);
    userEvent.click(name);

    //action
    userEvent.click(screen.getByRole('button',{name:'Close'}))

    // expectation
    expect(screen.queryByText("Let's look at the information about Leia Organa")).not.toBeInTheDocument();
  });
});
