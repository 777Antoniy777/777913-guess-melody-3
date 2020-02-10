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
  let welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={ errorsCount }
      />
  );

  const button = welcomeScreen.find(`.welcome__button`);
  button.simulate(`click`);
});
