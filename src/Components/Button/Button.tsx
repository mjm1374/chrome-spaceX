import React from 'react';
import classnames from 'classnames';

import './Button.scss';

type ButtonProps = {
  variant?: 'light' | 'dark' | 'red' | 'blue';
  type?: 'button' | 'submit';
  size?: 'sm' | 'md' | 'lg';
  full?: boolean;
  disabled?: boolean;
  classname?: string;
  handleClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'light',
  type = 'button',
  size = 'sm',
  full = false,
  disabled = false,
  classname,
  handleClick,
  children,
}) => (
  <button
    className={classnames(
      classname,
      'btn',
      `btn--${size}`,
      full && 'btn--full',
      disabled && 'btn--disabled',
      variant && `btn--${variant}`,
    )}
    type={type === 'button' ? 'button' : 'submit'}
    onClick={handleClick || undefined}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
