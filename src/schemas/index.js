import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = yup.object().shape({
  username: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, 'Please create a stronger password')
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
