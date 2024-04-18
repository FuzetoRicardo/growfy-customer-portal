import classnames from 'classnames';
import React, { HTMLAttributes } from 'react';

import * as styles from './index.scss';

export const Spinner: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={classnames(styles.div, className)} />
  );
};