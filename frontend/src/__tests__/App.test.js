import { screen } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { testRender, makeTestStore } from '../reduxTestUtils';
import App from '../App';

jest.mock('axios');
jest.mock('../components/Header', () => () => <div>Header</div>);
jest.mock('react-konva', ()=>()=><></>)

let store;

beforeEach(() => {
  store = makeTestStore();
  testRender(
    <Router>
      <App />
    </Router>,
    {store}
  );
});

test('check components and screens on App', () => {
  const Header = screen.getByText(/Header/);

  expect(Header).toBeInTheDocument();
});
