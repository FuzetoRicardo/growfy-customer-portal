import { createContext } from 'react';

export type UseFormContextType = {
  addFieldError: (fieldName: string, message: string) => void;
  clearFieldError: (fieldName: string) => void;
  setFieldValue: (fieldName: string, newValue: any) => void;
};

export const UseFormContext = createContext<UseFormContextType>({
  addFieldError: () => {},
  clearFieldError: () => {},
  setFieldValue: () => {},
});