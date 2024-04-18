import axios from 'axios';

export const handleUserAuthentication: (username: string, password: string) => Promise<Record<any, any>> = (username, password) => {
  if (isCurrentAuthenticationInvalid()) {
    return axios.post(`${process.env.AUTHENTICATION_SERVICE_URL}/authenticate`, null, {
      auth: {
        username,
        password: btoa(password),
      },
    }).then(data => {
      window.localStorage.setItem('AUTH_TOKEN', data.headers['x-growfy-authorization-token']);
      window.localStorage.setItem('REFRESH_TOKEN', data.headers['x-growfy-refresh-token']);
      window.localStorage.setItem('EXPIRES_IN', `${new Date().getTime() + (parseInt(data.headers['x-growfy-expires-in']) * 1000)}`);
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

const isCurrentAuthenticationInvalid: () => boolean = () => {
  return !window.localStorage.getItem('AUTH_TOKEN') ||
    parseInt(window.localStorage.getItem('EXPIRES_IN')!) <= new Date().getTime();
}