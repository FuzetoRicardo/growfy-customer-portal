import classnames from 'classnames';
import React from 'react';

import * as styles from './Item.scss';

export type ItemProps = {
  mandatory?: boolean;
  label?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Item: React.FC<ItemProps> = ({
  mandatory = false,
  label = "",
  className,
  children,
}) => {
  return (
    <div className={classnames(styles.root, className)}>
      <label data-mandatory={mandatory} className={classnames(styles.label)}>{label.concat(mandatory ? '*' : '')}</label>
      {children}
    </div>
  );
};