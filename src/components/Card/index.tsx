import classnames from 'classnames';
import React from 'react';

import * as styles from './index.scss';

export type CardProps = {
  title?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({
  title = undefined,
  className,
  children,
}) => {
  return (
    <div className={classnames(styles.card, className)}>
      {title ? (
        <div className={classnames(styles.title)}>
          <h1>{title}</h1>
        </div>
      ) : null}
      {children}
    </div>
  );
};