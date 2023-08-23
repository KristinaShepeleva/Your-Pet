import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRegExp = /.+@.+\..+/i;
const nameRegExp = /^[a-zа-яё]{2,16}$/i;

export const registerSchema = yup.object().shape({
  username: yup.string().min(2).max(16).required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup
    .string()
    .min(5)
    .matches(
      passwordRules,
      'The password must have 1 uppercase letter, 1 lowercase letter and 1 number'
    )
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Required'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, 'Not valid password')
    .required('Required'),
});

export const userSchema = yup.object().shape({
  // avatarURL: yup.string(),
  avatarURL: yup.mixed(),

  name: yup
    .string()
    .required('Required')
    .matches(nameRegExp, 'Enter a valid Name'),
  email: yup
    .string()
    .trim()
    .required('Required')
    .matches(emailRegExp, 'Enter a valid Email'),
  birthday: yup.string().required('Required'),
  phone: yup.string().required('Required'),
  city: yup.string().required('Required'),
});
