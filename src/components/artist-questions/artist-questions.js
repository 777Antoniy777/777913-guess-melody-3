import React from "react";
import PropTypes from "prop-types";

const ArtistQuestion = ({id, answer}) => {
  return (
    <div className="artist" id={id}>
      <input className="artist__input visually-hidden" type="radio" name="answer" defaultValue="artist-1" id={`answer-${id}`} />
      <label className="artist__name" htmlFor={`answer-${id}`}>
        <img className="artist__picture" src="http://placehold.it/134x134" alt={answer} />
        {answer}
      </label>
    </div>
  );
};

const ArtistQuestions = ({answers}) => {
  return (
    <React.Fragment>
      { answers &&
        answers.map((elem) =>
          <ArtistQuestion
            key={ elem.id }
            id={ elem.id }
            answer={ elem.answer }
          />
        )
      }
    </React.Fragment>
  );
};

ArtistQuestion.propTypes = {
  id: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
};

ArtistQuestions.propTypes = {
  answers: PropTypes.array.isRequired,
};

export default ArtistQuestions;
