import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

import MaterialButton from '@material-ui/core/Button';

function Button({ children, color = 'primary', variant = 'contained' }) {
  return (
    <div styleName="button">
      <MaterialButton color={color} variant={variant}>
        {children}
      </MaterialButton>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.children,
  color: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
