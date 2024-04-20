import classnames from 'classnames';
import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Card } from 'components/Card';
import { Spinner } from 'components/Icon/Spinner';

import { Menu } from './Menu';

import { UseCommonDataContext } from 'hooks/useCommonData';

import { isCurrentAuthorizationInvalid } from 'actions/authenticationActions';
import { getPortalConfigurations } from 'actions/portalConfigurationsActions';
import { getUser } from 'actions/userDataActions';

import * as styles from './index.scss';

export const Layout: React.FC = () => {
  const [context, setContext] = useState<UseCommonData.Context>({
    portalConfiguration: {
      socialNetworks: {},
    },
    user: {
      id: '',
      name: '',
      networks: [],
    },
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const renderContent = useCallback(() => {
    if (isLoading) {
      return (
        <Card className={classnames(styles.loadingCard)}>
          <Spinner />
        </Card>
      );
    }

    return <Outlet />;
  }, [isLoading]);

  useEffect(() => {
    const abortController = new AbortController();
    if (isCurrentAuthorizationInvalid()) {
      navigate('/login');
    }
    Promise.all([getUser(abortController.signal), getPortalConfigurations(abortController.signal)]).then(responses => {
      if (responses.map(response => response.status).every(status => status < 300)) {
        setContext({
          portalConfiguration: responses[1].data!,
          user: responses[0].data!,
        });
        setIsLoading(false);
      }
      else if (responses.map(response => response.error?.isAborted).some(isAborted => !isAborted)) {
        const errors = responses.filter(response => response.error).map(response => response.error?.reason).join();
        window.alert(`The following error happened. Please try refreshing the page or each customer support.\n${errors}`);
      }
    });
    return () => abortController.abort();
  }, []);

  return (
    <div className={classnames(styles.root)}>
      <header className={classnames(styles.header)}>
        <div className={classnames(styles.userDropdown)}>
          <p>User Display Name</p>
        </div>
      </header>
      <Menu />
      <main className={classnames(styles.main)}>
        <UseCommonDataContext.Provider value={context}>
          {renderContent()}
        </UseCommonDataContext.Provider>
      </main>
    </div>
  );
};