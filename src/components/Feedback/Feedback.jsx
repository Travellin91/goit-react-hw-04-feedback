import React from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className="container">
      {options.map(option => (
        <button
          className="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,

};

export default Feedback;