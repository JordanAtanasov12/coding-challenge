import { render, screen } from '@testing-library/react';
import { debug } from 'console';
import App from './App';
import EventLogs from './components/EventLogs';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


test('renders event list items with avatar', async () => {
  jest.setTimeout(220000);
  const renderedComponent = await Enzyme.mount(
    <EventLogs />
  );
  await renderedComponent.update();
  jest.setTimeout(220000);
  const eventElement = screen.getByTestId("Div::Blockie");
  expect(eventElement).toBeInTheDocument();
}, 220_000);
