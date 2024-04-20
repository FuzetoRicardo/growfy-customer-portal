import axios from 'axios';

export const isCurrentAuthorizationInvalid: () => boolean = () => isCurrentJWTInvalid();

export const handleUserAuthentication: (username: string, password: string) => Promise<Record<any, any>> = (username, password) => {
  if (isCurrentJWTInvalid()) {
    return axios.post(`${process.env.AUTHENTICATION_SERVICE_URL}/authenticate`, null, {
      auth: {
        username,
        password: btoa(password),
      },
    }).then(data => {
      window.localStorage.setItem('JWT', data.headers['x-growfy-authorization-token']);
      return {};
    }).catch(error => {
      if (error.response.status === 401) {
        return {
          message: 'Invalid user credentials',
        };
      }
      return {
        message: 'User authentication failed unexpectedly',
      };
    });
  }

  return Promise.resolve({});
};

const isCurrentJWTInvalid: () => boolean = () => {
  if (!window.localStorage.getItem('JWT')) {
    return true;
  }
  const payload = JSON.parse(atob(window.localStorage.getItem('JWT')?.split('.')[1]!));
  return payload.exp <= new Date().getTime();
}