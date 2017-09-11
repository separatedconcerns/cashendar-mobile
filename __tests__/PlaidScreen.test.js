import React from 'react';
import PlaidScreen from '../src/screens/PlaidScreen.js';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<PlaidScreen />).toJSON();
  expect(rendered).toBeTruthy();
});
