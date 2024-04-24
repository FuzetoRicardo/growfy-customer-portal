import { RequestHandler } from './RequestHandler';

export const getCountryDataByCCA2Code: (countryCode: string, signal: AbortSignal) => Promise<HTTPRequest.Response<any>> = async (countryCode, signal) =>
  await new RequestHandler(process.env.COUNTRY_SERVICE_URL!, signal).get(`/${countryCode}`);