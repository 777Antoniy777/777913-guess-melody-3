import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from './welcome-screen';

Enzyme.configure({
  adapter: new Adapter(),
});

// set mocha data
const errorsCount = 5;

it(`Should button be pressed`, () => {
  const onButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={ errorsCount }
        onButtonClick={ onButtonClick }
      />
  );

  const button = welcomeScreen.find(`.welcome__button`);
  button.props().onClick();

  expect(onButtonClick.mock.calls.length).toBe(1);
});
