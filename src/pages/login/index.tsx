import classnames from 'classnames';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Item } from 'components/Form';

import { handleUserAuthentication } from 'actions/authenticationActions';

import * as styles from './index.scss';

export const Login: React.FC = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values: Record<string, string>, event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoggingIn(true);
    if (!values.username || !values.password) {
      window.alert('Both username and password are mandatory!');
      setIsLoggingIn(false);
    }
    else {
      handleUserAuthentication(values.username, values.password).then(response => {
        if (response.message) {
          window.alert(response.message);
          setIsLoggingIn(false);
        }
        else {
          navigate('/');
        }
      });
    }
  };

  return (
    <div className={classnames(styles.root)}>
      <div className={classnames(styles.artContainer)}>
        <img src="https://ychef.files.bbci.co.uk/1280x720/p0clnh6g.jpg" />
      </div>
      <Form onFormSubmit={handleSubmit} className={classnames(styles.form)}>
        <Item mandatory label="Username">
          <input name="username" type="text" />
        </Item>
        <Item mandatory label="Password">
          <input name="password" type="password" />
        </Item>
        <button disabled={isLoggingIn} type="submit">Login</button>
      </Form>
    </div>
  );
};