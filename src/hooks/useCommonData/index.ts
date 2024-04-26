import { createContext, useContext } from 'react';

export namespace UseCommonData {
  export interface Context {
    portalConfiguration: Configuration.Root;
    user: Model.User;
  }
}

const portalConfigurationDefaultValue: Configuration.Root = {
  socialNetworks: {},
};

const userDefaultValue: Model.User = {
  birthDate: '',
  city: '',
  country: '',
  id: '',
  languages: [],
  name: '',
  state: '',
  networks: [],
};

export const UseCommonDataContext = createContext<Partial<UseCommonData.Context>>({});

export const useCommonData: () => UseCommonData.Context = () => {
  const {
    portalConfiguration,
    user,
  } = useContext<Partial<UseCommonData.Context>>(UseCommonDataContext);
  return {
    portalConfiguration: portalConfiguration || portalConfigurationDefaultValue,
    user: user || userDefaultValue,
  };
};

export default useCommonData;