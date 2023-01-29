import PropTypes from 'prop-types';
import { Li } from './Statistics.styled';
import React from 'react';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        <Li>good: {good}</Li>
        <Li>neutral: {neutral}</Li>
        <Li>bad: {bad}</Li>
        <Li>sumTotal: {total}</Li>
        <Li>percentage: {positivePercentage}%</Li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
