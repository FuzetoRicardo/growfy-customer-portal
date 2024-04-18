import { useContext } from 'react';

import { UseFormContext } from './useFormContext';

export const useForm = () => useContext(UseFormContext);