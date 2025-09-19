export const handleInputChange = (setState, setError) => (e) => {
  const { name, value } = e.target;

  setState((prev) => ({ ...prev, [name]: value }));

  if (setError) {
    setError((prev) => ({
      ...prev,
      [name]: null,
    }));
  }
};

export const validationInput = (form) => {
  const errors = {};
  let isError = false;

  if (!form?.email.trim()) {
    errors.email = 'Email is required';
    isError = true;
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      errors.email = 'Invalid email format';
      isError = true;
    }
  }

  if (!form?.password.trim()) {
    errors.password = 'Password is required';
    isError = true;
  } else if (form.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
    isError = true;
  }

  if (!form?.username?.trim()) {
    errors.username = 'Username is required';
    isError = true;
  } else if (form?.username?.length < 6) {
    errors.username = 'Username must be at least 6 characters';
    isError = true;
  }

  return { errors, isError };
};
