import axios from 'axios';

export const getAuthenticationStatus: () => Promise<Record<any, any>> = () => Promise.resolve({
  shouldLogin: isCurrentAuthenticationInvalid(),
});

const isCurrentAuthenticationInvalid: () => boolean = () => {
  return !window.localStorage.getItem('AUTH_TOKEN') ||
    parseInt(window.localStorage.getItem('EXPIRES_IN')!) <= new Date().getTime();
}