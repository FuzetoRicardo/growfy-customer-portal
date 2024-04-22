import classnames from 'classnames';
import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';

import { NetworkDataCard } from './NetworkDataCard';

import { IconButton } from 'components/Button/Icon';
import { Card } from 'components/Card';
import { Badge } from 'components/Badge';

import useCommonData from 'hooks/useCommonData';

import { getUserNetworkData } from 'actions/userDataActions';

import * as styles from './index.scss';

export const Networks: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [socialNetworksData, setSocialNetworksData] = useState<Record<string, Model.SocialNetwork>>({});
  const { portalConfiguration, user } = useCommonData();

  const handleSocialMediaSelect = (event: React.MouseEvent<HTMLButtonElement>, socialMediaName: string) => {
    event.stopPropagation();
    setSelectedNetwork(socialMediaName);
  };

  const renderedNetworksSideMenu = useMemo(() => (
    <Card className={classnames(styles.optionsCard)}>
      {Object.keys(portalConfiguration.socialNetworks).map(networkName => (
        <Badge
          key={`network-button-${networkName}`}
          type={user.networks.includes(networkName) ? 'success' : 'error'}
        >
          <IconButton
            onClick={event => handleSocialMediaSelect(event, networkName)}
            className={classnames({ [styles.notSelected]: selectedNetwork !== networkName })}
          >
            <img src={portalConfiguration.socialNetworks[networkName].logoUrl[32]} />
          </IconButton>
        </Badge>
      )
    )}
    </Card>
  ), [portalConfiguration.socialNetworks, selectedNetwork, user.networks]);

  useEffect(() => {
    const abortController = new AbortController();
    if (selectedNetwork !== '' && !socialNetworksData[selectedNetwork]) {
      setIsLoading(true);
      getUserNetworkData(selectedNetwork, abortController.signal).then(response => {
        setSocialNetworksData({
          ...socialNetworksData,
          [selectedNetwork]: response.data!,
        });
        setIsLoading(false);
      });
    }
    return () => abortController.abort();
  }, [selectedNetwork]);

  return (
    <div className={classnames(styles.root)}>
      {renderedNetworksSideMenu}
      <NetworkDataCard
        data={socialNetworksData[selectedNetwork]}
        loading={isLoading}
        selectedNetworkName={selectedNetwork}
      />
    </div>
  );
};