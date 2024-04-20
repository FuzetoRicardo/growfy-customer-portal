import { RequestHandler } from './RequestHandler';

export const getUser: (signal: AbortSignal) => Promise<HTTPRequest.Response<Model.User>> = async (signal) =>
  await new RequestHandler(process.env.USER_DATA_SERVICE_URL!, signal).get('/user');

export const getUserNetworkData: (networkName: string, signal: AbortSignal) => Promise<HTTPRequest.Response<Model.SocialNetwork>> = async (networkName, signal) =>
  await new RequestHandler(process.env.USER_DATA_SERVICE_URL!, signal).get(`/user/network/${networkName}`);