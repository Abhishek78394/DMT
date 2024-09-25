import { useState } from 'react';

export const useFormHandler = (initialValues) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (values, rules) => {
    const errors = {};
    Object.keys(rules).forEach((key) => {
      if (!values[key]) errors[key] = `${key} is required`;
      if (rules[key].regex && !rules[key].regex.test(values[key])) errors[key] = rules[key].message;
    });
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return { formValues, errors, handleChange, validate };
};
