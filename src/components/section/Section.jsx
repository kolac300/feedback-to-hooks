import PropTypes from 'prop-types';
import { SectionWrapper } from './Section.styled';
import React from 'react';

export const Section = ({ tittle, children }) => {
  return (
    <SectionWrapper>
      <h1>{tittle}</h1>
      <div>{children}</div>
    </SectionWrapper>
  );
};
Section.propTypes = {
  tittle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
