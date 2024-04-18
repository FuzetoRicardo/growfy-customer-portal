import classnames from 'classnames';
import React from 'react';

import * as styles from './index.scss';

export type TableProps = {
  headers?: string[];
} & React.HTMLAttributes<HTMLTableElement>;

export const Table: React.FC<TableProps> = ({
  headers = [],
  className,
  children,
}) => {
  const renderHead = () => {
    if (headers.length === 0) {
      return null;
    }

    return (
      <thead className={classnames(styles.thead)}>
        <tr>
          {headers.map((header, index) => <th key={`th-${header}-${index}`} className={classnames(styles.th)}>{header}</th>)}
        </tr>
      </thead>
    );
  };

  return (
    <table className={classnames(styles.table, className)}>
      {renderHead()}
      {children}
    </table>
  );
};

export * from './Body';
export * from './Cell';
export * from './Header';
export * from './Row';