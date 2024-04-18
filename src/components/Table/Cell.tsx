import classnames from 'classnames';
import React from 'react';

import * as styles from './Cell.scss';

export type CellProps = {
  align?: 'left' | 'center' | 'right';
} & React.HTMLAttributes<HTMLTableCellElement>;

export const Cell: React.FC<CellProps> = ({
  align = 'left',
  children,
  className,
}) => {
  return (
    <td className={classnames(styles[`cell${align}`], className)}>{children}</td>
  );
};