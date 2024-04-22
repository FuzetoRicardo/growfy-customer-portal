import classnames from 'classnames';
import React from 'react';

import { Card } from 'components/Card';

import useCommonData from 'hooks/useCommonData';

import * as styles from './index.scss';

export const MediaKit: React.FC = () => {
  const { user } = useCommonData();

  return (
    <div className={classnames(styles.root)}>
      <Card title={user.name}>

      </Card>
      <Card title="Audience">

      </Card>
      <Card title="Social Networks">

      </Card>
    </div>
  );
};