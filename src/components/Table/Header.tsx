import classnames from 'classnames';
import React from 'react';

import * as styles from './Header.scss';

export type HeaderProps = {
  title?: string;
};

export const Header: React.FC<HeaderProps> = ({
  title = '',
}) => {
  return (
    <th className={classnames(styles.header)}>{title}</th>
  );
};