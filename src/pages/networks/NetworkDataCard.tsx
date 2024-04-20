import classnames from 'classnames';
import React from 'react';

import { Card } from 'components/Card';
import { Spinner } from 'components/Icon/Spinner';

import * as styles from './NetworkDataCard.scss';

export type NetworkDataCardProps = {
  data: Model.SocialNetwork;
  loading: boolean;
  selectedNetworkName: string;
} & React.HTMLAttributes<HTMLElement>;

export const NetworkDataCard: React.FC<NetworkDataCardProps> = ({
  data,
  loading,
  selectedNetworkName,
  className,
}) => {
  const renderCardContent = () => {
    if (loading) {
      return <Spinner />;
    }
    if (selectedNetworkName === '') {
      return <p>Please, select a social network on the left</p>;
    }
    if (!data) {
      return <button>Connect</button>;
    }
    return (
      <>
        <p>Display name: {data.displayName}</p>
        <p>Channel creation date: {data.createdAt}</p>
        <p>Followers: {data.followerCount}</p>
      </>
    );
  };

  return (
    <Card
      className={classnames(
        loading || selectedNetworkName === '' || !data ? styles.loading : styles.root,
        className
      )}
    >
      {renderCardContent()}
    </Card>
  );
};