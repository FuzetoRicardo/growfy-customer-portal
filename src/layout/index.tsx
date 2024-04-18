import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import {
  Await,
  Outlet,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';

import { Card } from 'components/Card';
import { Spinner } from 'components/Icon/Spinner';

import { Menu } from './Menu';

import * as styles from './index.scss';

export type LoaderAuthorization = {
  authorization: Promise<Record<any, any>>;
};

export const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { authorization } = useLoaderData() as LoaderAuthorization;
  const navigate = useNavigate();

  useEffect(() => {
    authorization.then(response => {
      if (response.shouldLogin) {
        navigate('/login');
      }
      else {
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return (
      <div className={classnames(styles.root)}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={classnames(styles.root)}>
      <header className={classnames(styles.header)}>
        <div className={classnames(styles.userDropdown)}>
          <p>User Display Name</p>
        </div>
      </header>
      <Menu />
      <main className={classnames(styles.main)}>
          <React.Suspense
            fallback={(
              <Card className={classnames(styles.loadingCard)}>
                <Spinner />
              </Card>
            )}
          >
            <Await
              resolve={authorization}
              errorElement={<p>User authentication failed unexpectedly</p>}
            >
              {(authorizationResult) => authorizationResult.message && (<p>{authorizationResult.message}</p>) || (<Outlet />)}
            </Await>
          </React.Suspense>
      </main>
    </div>
  );
};