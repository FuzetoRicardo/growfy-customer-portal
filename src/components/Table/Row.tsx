import classnames from 'classnames';
import React from 'react';

import * as styles from './Row.scss';

export type RowProps = {
  header?: boolean;
} & React.HTMLAttributes<HTMLTableRowElement>;

export const Row: React.FC<RowProps> = ({
  className,
  children,
}) => {
  return (
    <tr className={classnames(styles.row, className)}>{children}</tr>
  );
};