import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivefeedback }) => {
  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>PositiveFeedback:{positivefeedback} %</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivefeedback: PropTypes.number.isRequired,
};

export default Statistics;
