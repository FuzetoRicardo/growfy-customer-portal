import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class RequestHandler {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 1000 * 60,
      headers: {
        'Authorization': `Bearer ${window.localStorage.getItem('AUTH_TOKEN')}`,
      },
    });
  }

  public get: (path: string) => Promise<AxiosResponse<any, any>> = (path: string) => {
    return this.axiosInstance.get(path);
  };
}