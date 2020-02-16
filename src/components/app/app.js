import React from "react";
import PropTypes from "prop-types";
import {Switch, Route} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions,
      step: -1,
      question: null,
      type: ``,
    };
    this.handleStartButtonClick = this.handleStartButtonClick.bind(this);
  }

  handleStartButtonClick(evt) {
    evt.preventDefault();

    this.setState({
      step: 0,
    });
  }

  renderGameScreen() {
    const {questions, step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          // properties
          errorsCount={this.props.errorsCount}
          // handlers
          onStartButtonClick={this.handleStartButtonClick}
        />
      );
    }

    if (question) {
      const type = question.type;

      if (type === `artist`) {
        return (
          <ArtistQuestionScreen
            // properties
            question={question}
          />
        );
      } else if (type === `genre`) {
        return (
          <GenreQuestionScreen
            // properties
            question={question}
          />
        );
      }
    }

    return false;
  }

  render() {
    const {questions} = this.state;
    const gameScreen = this.renderGameScreen();

    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            {gameScreen}
          </Route>
          <Route path="/artist">
            <ArtistQuestionScreen
              // propperties
              question={questions[0]}
            />
          </Route>
          <Route path="/genre">
            <GenreQuestionScreen
              // propperties
              question={questions[1]}
            />
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
