const validate = (value: string) => {
  let error = null;
  let val = Number(value);

  if (!val) {
    error = 'Please fill out with a number';
  } else if (val < 0) {
    error = 'Please fill with positive integers only';
  }

  return error;
};

export default validate;