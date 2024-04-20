import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export class RequestHandler {
  private axiosInstance: AxiosInstance;
  private signal: AbortSignal;

  constructor(baseURL: string, signal: AbortSignal) {
    this.signal = signal;
    this.axiosInstance = axios.create({
      baseURL,
      signal,
      timeout: 1000 * 60,
      headers: {
        'Authorization': `Bearer ${window.localStorage.getItem('JWT')}`,
      },
    });
  }

  public get: <T = any>(path: string) => Promise<HTTPRequest.Response<T>> =
    <T>(path: string) => this.handle(this.axiosInstance.get(path));

  private handle: <T = any>(promise: Promise<AxiosResponse<T>>) => Promise<HTTPRequest.Response<T>> = <T>(promise: Promise<AxiosResponse<T>>) =>
    promise.then((response: AxiosResponse<T>) => ({
      status: response.status,
      data: response.data,
    }))
    .catch((error: AxiosError<any>) => {
      if (!error.response) {
        return {
          status: 400,
          error: {
            isAborted: this.signal.aborted,
            reason: `There was no response from the server (${error.message})`,
          },
        };
      }
      return {
        status: error.response.status,
        error: {
          isAborted: this.signal.aborted,
          reason: `${error.response.data.reason}`,
        },
      };
    });
}