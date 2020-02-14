import React from "react";
import PropTypes from "prop-types";
import GenreQuestions from "../genre-questions/genre-questions";

const GenreQuestionScreen = ({genreQuestions}) => {
  const {question, correctAnswer} = genreQuestions[0];

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
        <h2 className="game__title">{ question }</h2>

        <form className="game__tracks">

          {/* Список ответов на вопрос по жанру */}
          <GenreQuestions
            correctAnswer={ correctAnswer }
          />

          <button className="game__submit button" type="submit">Ответить</button>

        </form>

        {/* <form className="game__tracks">

          <div className="track">
            <button className="track__button track__button--play" type="button" />
            <div className="track__status">
              <audio />
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" defaultValue="answer-1" id="answer-1" />
              <label className="game__check" htmlFor="answer-1">Отметить</label>
            </div>
          </div>

          <div className="track">
            <button className="track__button track__button--play" type="button" />
            <div className="track__status">
              <audio />
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" defaultValue="answer-1" id="answer-2" />
              <label className="game__check" htmlFor="answer-2">Отметить</label>
            </div>
          </div>

          <div className="track">
            <button className="track__button track__button--pause" type="button" />
            <div className="track__status">
              <audio />
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" defaultValue="answer-1" id="answer-3" />
              <label className="game__check" htmlFor="answer-3">Отметить</label>
            </div>
          </div>

          <div className="track">
            <button className="track__button track__button--play" type="button" />
            <div className="track__status">
              <audio />
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" defaultValue="answer-1" id="answer-4" />
              <label className="game__check" htmlFor="answer-4">Отметить</label>
            </div>
          </div>

          <button className="game__submit button" type="submit">Ответить</button>

        </form> */}

      </section>

    </section>
  );
};

GenreQuestionScreen.propTypes = {
  genreQuestions: PropTypes.array.isRequired,
};

export default GenreQuestionScreen;
