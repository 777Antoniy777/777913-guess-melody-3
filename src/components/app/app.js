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
      type: ``,
    };
  }

  filterArtistQustions() {
    const {questions} = this.state;

    const artistQuestions = questions.filter((elem) => {
      return elem.type === `artist`;
    });

    return artistQuestions;
  }

  filterGenreQustions() {
    const {questions} = this.state;

    const genreQuestions = questions.filter((elem) => {
      return elem.type === `genre`;
    });

    return genreQuestions;
  }

  render() {
    const {type} = this.state;
    const artistQuestions = this.filterArtistQustions();
    const genreQuestions = this.filterGenreQustions();

    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            { type === `` &&
              <WelcomeScreen
                errorsCount = {this.props.errorsCount}
              />
            }
          </Route>
          <Route path="/artist">
            { type === `artist` &&
              <ArtistQuestionScreen
                artistQuestions={ artistQuestions }
              />
            }
          </Route>
          <Route path="/genre">
            { type === `genre` &&
              <GenreQuestionScreen
                genreQuestions={ genreQuestions }
              />
            }
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
