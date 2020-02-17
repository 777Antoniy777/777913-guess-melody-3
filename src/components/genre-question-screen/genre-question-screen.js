import React from "react";
import PropTypes from "prop-types";
import GenreQuestions from "../genre-questions/genre-questions";

class GenreQuestionScreen extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      answer: {
        count: null,
        answers: [false, false, false, false],
      }
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onSetGenreAnswer = this.onSetGenreAnswer.bind(this);
  }

  handleFormSubmit(evt) {
    let {question, onSetAnswerOption} = this.props;
    const {answer} = this.state;
    evt.preventDefault();

    question = question.genre;
    onSetAnswerOption(question, answer);
  }

  setUsersAnswers(answers, startIndex, deleteCount, genre) {
    answers.splice(startIndex, deleteCount, genre);

    return answers;
  }

  setAmountAnswer() {

  }

  onSetGenreAnswer(startIndex, deleteCount, genre) {
    let {answer} = this.state;
    const {answers} = answer;
    // answers.splice(startIndex, deleteCount, genre);

    const count = 2;
    const usersAnswers = this.setUsersAnswers(answers, startIndex, deleteCount, genre);
    answer = {
      count,
      answers: usersAnswers,
    };

    this.setState({
      answer,
    });
  }

  render() {
    const {question} = this.props;
    const {genre, answers} = question;

    return (
      <section className="game game--genre">

        <header className="game__header">

          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx={390} cy={390} r={370} style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
          </svg>

          <div className="game__mistakes">
            <div className="wrong" />
            <div className="wrong" />
            <div className="wrong" />
          </div>

        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>

          <form className="game__tracks" onSubmit={this.handleFormSubmit} >

            {/* Список ответов на вопрос по жанру */}
            <GenreQuestions
              // proprties
              answers={answers}
              // handlers
              onSetGenreAnswer={this.onSetGenreAnswer}
            />

            <button className="game__submit button" type="submit">Ответить</button>

          </form>

        </section>

      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.exact({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
  }).isRequired,
  onSetAnswerOption: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
