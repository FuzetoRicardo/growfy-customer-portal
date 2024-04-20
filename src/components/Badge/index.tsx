import classnames from 'classnames';
import React from 'react';

import * as styles from './index.scss';

export type BadgeProps = {
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  type?: 'error' | 'information' | 'success' | 'warning';
} & React.HTMLAttributes<HTMLDivElement>;

export const Badge: React.FC<BadgeProps> = ({
  bottom = false,
  left = false,
  right = false,
  top = false,
  type = 'information',
  className,
  children,
}) => {
  return (
    <div className={classnames(styles.root)}>
      <div className={
        classnames(
          styles.pinDiv,
          styles[type],
          className,
          {
            [styles['bottom']]: bottom && !top,
            [styles['left']]: left && !right,
            [styles['right']]: right || !left,
            [styles['top']]: top || !bottom,
          }
        )}
      />
      {children}
    </div>
  );
};