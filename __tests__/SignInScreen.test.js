import React from 'react';
import SignInScreen from '../src/screens/SignInScreen.js';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<SignInScreen />).toJSON();
  expect(rendered).toBeTruthy();
});
