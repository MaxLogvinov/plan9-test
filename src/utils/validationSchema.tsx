import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Логин обязателен')
    .min(3, 'Логин должен содержать не менее 3 символов'),
  password: Yup.string()
    .required('Пароль обязателен')
    .min(6, 'Пароль должен содержать не менее 6 символов')
});
