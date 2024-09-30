import { useState } from 'react';

export const useRegisterForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormValues({
      ...formValues,
      agreeTerms: e.target.checked,
    });
  };

  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.name) errors.name = 'Name is required';
    if (!formValues.email) errors.email = 'Email is required';
    else if (!emailRegex.test(formValues.email)) errors.email = 'Invalid email address';

    if (!formValues.password) errors.password = 'Password is required';
    else if (formValues.password.length < 6) errors.password = 'Password should be at least 6 characters';

    if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!formValues.agreeTerms) errors.agreeTerms = 'You must agree to the terms of service';

    setFormErrors(errors);
    return errors;
  };

  return { formValues, formErrors, handleChange, handleCheckboxChange, validate };
};
