import React from "react";
import PropTypes from "prop-types";

// correct
// class GenreQuestion extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: false,
//     };
//     this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
//   }

//   handleCheckboxChange() {
//     this.setState((state) => ({
//       value: !state.value,
//     }));

//     // onSetGenreValues(index, 1, this.state.value);
//   }

//   render() {
//     const {value} = this.state;
//     const {id, src, genre} = this.props;

//     return (
//       <div className="track" id={id}>
//         <button className="track__button track__button--play" type="button" />
//         <div className="track__status">
//           <audio src={src} />
//         </div>
//         <div className="game__answer">
//           <input
//             id={`answer-${id}`}
//             className="game__input visually-hidden"
//             type="checkbox"
//             value={genre}
//             name="answer"
//             checked={value}
//             onChange={this.handleCheckboxChange}
//           />
//           <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
//         </div>
//       </div>
//     );
//   }
// }

const GenreQuestion = ({id, index, src, value, genre, onSetGenreValues}) => {
  const handleCheckboxChange = (evt) => {
    const target = evt.target;
    const value = target.checked;
    evt.preventDefault();

    onSetGenreValues(index, 1, value);
  };

  return (
    <div className="track" id={id}>
      <button className="track__button track__button--play" type="button" />
      <div className="track__status">
        <audio src={src} />
      </div>
      <div className="game__answer">
        <input
          id={`answer-${id}`}
          className="game__input visually-hidden"
          type="checkbox"
          value={genre}
          name="answer"
          checked={value}
          onChange={handleCheckboxChange}
        />
        <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
      </div>
    </div>
  );
};

const GenreQuestions = ({answers, values, onSetGenreValues}) => {
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
            value={values[i]}
            // handlers
            onSetGenreValues={onSetGenreValues}
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
  onSetGenreValues: PropTypes.func.isRequired,
};

GenreQuestions.propTypes = {
  answers: PropTypes.arrayOf(
      PropTypes.object
  ).isRequired,
  onSetGenreValues: PropTypes.func.isRequired,
};

export default GenreQuestions;
