import React from "react";
import PropTypes from "prop-types";

const ArtistQuestion = ({id, picture, artist}) => {
  return (
    <div className="artist" id={id}>
      <input className="artist__input visually-hidden" type="radio" name="answer" defaultValue="artist-1" id={`answer-${id}`} />
      <label className="artist__name" htmlFor={`answer-${id}`}>
        <img className="artist__picture" src={picture} alt={artist} />
        {artist}
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
            // propperties
            key={ elem.id }
            id={ elem.id }
            picture={ elem.picture }
            artist={ elem.artist }
          />
        )
      }
    </React.Fragment>
  );
};

ArtistQuestion.propTypes = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

ArtistQuestions.propTypes = {
  answers: PropTypes.arrayOf(
      PropTypes.object
  ).isRequired,
};

export default ArtistQuestions;
