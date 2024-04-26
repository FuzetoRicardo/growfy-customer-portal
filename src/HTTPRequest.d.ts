declare namespace HTTPRequest {
  interface Error {
    isAborted: boolean;
    reason: string;
  }

  interface Response<T> {
    data?: T | undefined;
    error?: Error | undefined;
    status: number;
  }
}