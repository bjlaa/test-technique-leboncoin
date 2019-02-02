import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';


const Card = ({ children }) => (
  <div className={styles.card}>
    {children}
  </div>
);

Card.propTypes = {
	children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Card;