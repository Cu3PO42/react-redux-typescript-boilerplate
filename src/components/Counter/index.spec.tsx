import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '.';

test('Counter is rendered', () => {
  const component = renderer.create(<Counter count={2} increment={() => undefined} decrement={() => undefined} />);
  expect(component.toJSON()).toMatchSnapshot();
});
