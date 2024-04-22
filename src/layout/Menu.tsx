import classnames from 'classnames';
import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as styles from './Menu.scss';

export const Menu: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentOption = useMemo(() => {
    switch (pathname) {
      case '/mediakit':
        return 1;
      case '/myaccount':
        return 2;
        case '/revenue':
          return 3;
        case '/networks':
          return 4;
      default:
        return 0;
    }
  }, [pathname]);

  return (
    <div className={classnames(styles.root)}>
      <button
        onClick={() => navigate('/')}
        className={classnames(styles.button, { [styles.selected]: currentOption === 0 })}
      >Dashboard</button>
      <button
        onClick={() => navigate('/mediakit')}
        className={classnames(styles.button, { [styles.selected]: currentOption === 1 })}
      >Media kit</button>
      <button
        onClick={() => navigate('/myaccount')}
        className={classnames(styles.button, { [styles.selected]: currentOption === 2 })}
      >My account</button>
      <button
        onClick={() => navigate('/revenue')}
        className={classnames(styles.button, { [styles.selected]: currentOption === 3 })}
      >Revenue</button>
      <button
        onClick={() => navigate('/networks')}
        className={classnames(styles.button, { [styles.selected]: currentOption === 4 })}
      >Social networks</button>
    </div>
  );
};