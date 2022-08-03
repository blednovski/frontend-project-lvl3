import * as yup from 'yup';

const validator = (urlToValidate, alreadyExisting) => {
  const schema = yup.string().url().notOneOf(alreadyExisting);

  try {
    return schema.validateSync(urlToValidate);
  } catch (err) {
    return err;
  }
};

export default validator;
