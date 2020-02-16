import React from "react";
import PropTypes from "prop-types";

const GenreQuestion = ({id, src}) => {
  return (
    <div className="track" id={id}>
      <button className="track__button track__button--play" type="button" />
      <div className="track__status">
        <audio src={ src } />
      </div>
      <div className="game__answer">
        <input className="game__input visually-hidden" type="checkbox" name="answer" defaultValue="answer-1" id={`answer-${id}`} />
        <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
      </div>
    </div>
  );
};

const GenreQuestions = ({answers}) => {
  return (
    <React.Fragment>
      { answers &&
        answers.map((elem) =>
          <GenreQuestion
            // propperties
            key={ elem.id }
            id={ elem.id }
            src={ elem.src }
            genre={ elem.genre }
          />
        )
      }
    </React.Fragment>
  );
};

GenreQuestion.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};

GenreQuestions.propTypes = {
  answers: PropTypes.arrayOf(
      PropTypes.object
  ).isRequired,
};

export default GenreQuestions;
