import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivefeedback }) => {
  return (
    <>
      <p className='stat_good'>Добре:{good}</p>
      <p className='stat_neutral'>Нейтрально:{neutral}</p>
      <p className='stat_bad'>Погано:{bad}</p>
      <p className='stat_total'>Загалом:{total}</p>
      <p className='stat_positivefeedback'>Позитивний Відгук:{positivefeedback} %</p>
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
