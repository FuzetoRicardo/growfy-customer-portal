import { createContext, useContext } from 'react';

export const UseCommonDataContext = createContext<UseCommonData.Context>({
  portalConfiguration: {
    socialNetworks: {},
  },
  user: {
    id: '',
    name: '',
    networks: [],
  },
});

export const useCommonData = () => useContext<UseCommonData.Context>(UseCommonDataContext);

export default useCommonData;