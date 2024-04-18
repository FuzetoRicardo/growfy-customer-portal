import classnames from 'classnames';
import React from 'react';

import * as styles from './index.scss';

export const Dashboard: React.FC = () => {
  return (
    <div className={classnames(styles.root)}>
      <p>Dashboard</p>
    </div>
  );
};