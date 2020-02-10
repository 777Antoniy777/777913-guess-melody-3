import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

// set mocha data
const errorsCount = 5;
const onButtonClick = () => {};

it(`WelcomeScreen should render errorsCount`, () => {
  const tree = renderer.create(
      <WelcomeScreen
        errorsCount={ errorsCount }
        onButtonClick={ onButtonClick }
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
