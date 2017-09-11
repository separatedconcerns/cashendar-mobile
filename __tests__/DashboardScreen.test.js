import React from 'react';
import DashboardScreen from '../src/screens/DashboardScreen.js';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<DashboardScreen />).toJSON();
  expect(rendered).toBeTruthy();
});
