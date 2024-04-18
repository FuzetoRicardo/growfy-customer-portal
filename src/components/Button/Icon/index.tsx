import classnames from 'classnames';
import React, { HTMLAttributes } from 'react';

import * as styles from './index.scss';

export const IconButton: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={classnames(styles.button, className)}
    >
      {children}
    </button>
  );
};