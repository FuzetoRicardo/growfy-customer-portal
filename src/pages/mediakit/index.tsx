import classnames from 'classnames';
import React, { useMemo } from 'react';

import { Card } from 'components/Card';

import useCommonData from 'hooks/useCommonData';

import * as styles from './index.scss';

export const MediaKit: React.FC = () => {
  const { user } = useCommonData();

  const userAge = useMemo(() => {
    const birthDateParts = user.birthDate.slice(0, 10).split('-');
    const birthDateObject = new Date(parseInt(birthDateParts[0]), parseInt(birthDateParts[1]), parseInt(birthDateParts[2]));
    return new Date(new Date().getTime() - birthDateObject.getTime()).getFullYear() - 1970;
  }, [user.birthDate]);

  return (
    <div className={classnames(styles.root)}>
      <Card title={user.name}>
        <p><strong>Age:</strong> {userAge}</p>
        <p><strong>Location:</strong> {user.city}, {user.state} - {user.country}</p>
      </Card>
      <Card title="Audience">

      </Card>
      <Card title="Social Networks">

      </Card>
    </div>
  );
};