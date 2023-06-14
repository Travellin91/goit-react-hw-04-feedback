import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivefeedback }) => {
  return (
    <>
      <p className='stat_good'>Good:{good}</p>
      <p className='stat_neutral'>Neutral:{neutral}</p>
      <p className='stat_bad'>Bad:{bad}</p>
      <p className='stat_total'>Total:{total}</p>
      <p className='stat_positivefeedback'>Positive Feedback:{positivefeedback} %</p>
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
