import { RequestHandler } from './RequestHandler';

export const getPortalConfigurations: (signal: AbortSignal) => Promise<HTTPRequest.Response<Configuration.Root>> = async (signal) =>
  await new RequestHandler(process.env.USER_DATA_SERVICE_URL!, signal).get('/configurations');