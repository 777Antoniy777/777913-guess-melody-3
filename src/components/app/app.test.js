import React from "react";
import renderer from "react-test-renderer";
import App from './app';

// set mocha data
const errorsCount = 5;
const onButtonClick = () => {};

it(`Should render App`, () => {
  const tree = renderer.create(
      <App
        errorsCount={ errorsCount }
        onButtonClick={ onButtonClick }
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


