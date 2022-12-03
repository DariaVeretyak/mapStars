import React from 'react';
import PropTypes from 'prop-types';
import './HowWorkBlock.scss';

export const HowWorkBlock = ({ step, title, content }) => (
  <div className="HowWorkBlock">
    <p className="HowWorkBlock__step">{step}</p>
    <h3 className="HowWorkBlock__title">
      {title}
    </h3>
    <p className="HowWorkBlock__content">{content}</p>
  </div>
);

HowWorkBlock.propTypes = {
  step: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

HowWorkBlock.defaultProps = {
  content: '',
};
