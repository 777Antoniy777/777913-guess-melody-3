import React from "react";
import PropTypes from "prop-types";

const GenreQuestion = ({id}) => {
  return (
    <div className="track" id={id}>
      <button className="track__button track__button--play" type="button" />
      <div className="track__status">
        <audio />
      </div>
      <div className="game__answer">
        <input className="game__input visually-hidden" type="checkbox" name="answer" defaultValue="answer-1" id={`answer-${id}`} />
        <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
      </div>
    </div>
  );
};

const GenreQuestions = ({correctAnswer}) => {
  return (
    <React.Fragment>
      { correctAnswer &&
        correctAnswer.map((elem, i) =>
          <GenreQuestion
            key={ ++i }
            id={ ++i }
          />
        )
      }
    </React.Fragment>
  );
};

GenreQuestion.propTypes = {
  id: PropTypes.number.isRequired,
};

GenreQuestions.propTypes = {
  correctAnswer: PropTypes.array.isRequired,
};

export default GenreQuestions;
