import { createContext, useContext } from 'react';

export const useCommonDataDefaultValue = {
  country: {
    name: '',
  },
  portalConfiguration: {
    socialNetworks: {},
  },
  user: {
    birthDate: '',
    city: '',
    country: '',
    id: '',
    languages: [],
    name: '',
    state: '',
    networks: [],
  },
};

export const UseCommonDataContext = createContext<UseCommonData.Context>(useCommonDataDefaultValue);

export const useCommonData = () => useContext<UseCommonData.Context>(UseCommonDataContext);

export default useCommonData;