import React from "react";
import PropTypes from "prop-types";

const GenreQuestion = ({id, index, src, genre, onSetGenreAnswer}) => {
  const handleCheckBoxChange = (evt) => {
    evt.preventDefault();

    onSetGenreAnswer(index, 1, genre);
  };

  return (
    <div className="track" id={id}>
      <button className="track__button track__button--play" type="button" />
      <div className="track__status">
        <audio src={src} />
      </div>
      <div className="game__answer">
        <input className="game__input visually-hidden" onChange={handleCheckBoxChange} type="checkbox" name="answer" defaultValue="answer-1" id={`answer-${id}`} />
        <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
      </div>
    </div>
  );
};

const GenreQuestions = ({answers, onSetGenreAnswer}) => {
  return (
    <React.Fragment>
      { answers &&
        answers.map((elem, i) =>
          <GenreQuestion
            // propperties
            key={elem.id}
            id={elem.id}
            index={i}
            src={elem.src}
            genre={elem.genre}
            // handlers
            onSetGenreAnswer={onSetGenreAnswer}
          />
        )
      }
    </React.Fragment>
  );
};

GenreQuestion.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  onSetGenreAnswer: PropTypes.func.isRequired,
};

GenreQuestions.propTypes = {
  answers: PropTypes.arrayOf(
      PropTypes.object
  ).isRequired,
  onSetGenreAnswer: PropTypes.func.isRequired,
};

export default GenreQuestions;
