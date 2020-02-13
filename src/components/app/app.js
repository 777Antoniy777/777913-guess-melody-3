import React from "react";
import PropTypes from "prop-types";
import {Switch, Route} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import ArtistQuestion from "../artist-question/artist-question";
import GenreQuestion from "../genre-question/genre-question";

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      questions: this.props.questions,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            <WelcomeScreen
              errorsCount = {this.props.errorsCount}
            />
          </Route>
          <Route path="/artist">
            <ArtistQuestion />
          </Route>
          <Route path="/genre">
            <GenreQuestion />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  errorsCount: 3,
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
