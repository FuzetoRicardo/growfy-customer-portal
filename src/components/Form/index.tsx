import classnames from 'classnames';
import React, {
  useCallback,
  useMemo,
  useState
} from 'react';

import { UseFormContext } from './useFormContext';

export type FieldErrorsType = {
  [key: string]: string;
};

export type FormProps = {
  onFormSubmit?: (values: Record<string, string>, event: React.FormEvent<HTMLFormElement>) => void;
} & React.HTMLAttributes<HTMLFormElement>;

export const Form: React.FC<FormProps> = ({
  className,
  onFormSubmit = () => {},
  children,
}) => {
  const [errors, setErrors] = useState<FieldErrorsType>({});
  const [values, setValues] = useState<Object>({});

  const addFieldError = useCallback((fieldName: string, message: string) => {
    if (fieldName && message) {
      setErrors({
        ...errors,
        [fieldName]: message,
      });
    }
  }, [errors]);

  const clearFieldError = useCallback((fieldName: string) => {
    if (fieldName) {
      setErrors(
        Object.keys(errors).filter(key => key !== fieldName)
          .reduce((accumulator, key) => ({
            ...accumulator,
            [key]: errors[key]
          }), {})
      );
    }
  }, [errors]);

  const setFieldValue = useCallback((fieldName: string, newValue: any) => {
    setValues({
      ...values,
      [fieldName]: newValue,
    });
  }, [values]);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    let values = {};
    formData.forEach((value: any, key: string) => {
      values = {
        ...values,
        [key]: value,
      };
    });
    onFormSubmit(values, event);
  }, [values, onFormSubmit]);

  const useFormContext = useMemo(() => ({
    addFieldError,
    clearFieldError,
    setFieldValue,
  }), [addFieldError, clearFieldError, setFieldValue]);

  return (
    <form className={classnames(className)} onSubmit={handleSubmit}>
      <UseFormContext.Provider value={useFormContext}>
        {children}
      </UseFormContext.Provider>
    </form>
  );
};

export * from './Item';