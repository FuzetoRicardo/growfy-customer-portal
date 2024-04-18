import classnames from 'classnames';
import React, { useEffect, useState } from 'react';

import { IconButton } from 'components/Button/Icon';
import { Card } from 'components/Card';

import * as styles from './index.scss';

export type SocialNetworkData = {
  createdAt: Date;
  displayName: string;
  followerCount: number;
};

export const Networks: React.FC = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [socialNetworksData, setSocialNetworksData] = useState<Record<string, SocialNetworkData>>({});

  const handleSocialMediaSelect = (event: React.MouseEvent<HTMLButtonElement>, socialMediaName: string) => {
    event.stopPropagation();
    setSelectedNetwork(socialMediaName);
  };

  useEffect(() => {}, [selectedNetwork]);

  return (
    <div className={classnames(styles.root)}>
      <Card className={classnames(styles.optionsCard)}>
        <IconButton
          onClick={event => handleSocialMediaSelect(event, 'twitch')}
        >
          <img src="https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png" />
        </IconButton>
        <IconButton
          onClick={event => handleSocialMediaSelect(event, 'youtube')}
        >
          <img src="https://www.youtube.com/s/desktop/24644f83/img/favicon_32x32.png" />
        </IconButton>
      </Card>
      <Card className={classnames(styles.dataCard)}>
        <p>Data</p>
      </Card>
    </div>
  );
};