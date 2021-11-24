import axiosInstance from '../../../helpers/axiosIntercepter';

export default ({
  email,
  password,
  username,
  firstName: first_name,
  lastName: last_name,
}) => {
  axiosInstance
    .post('auth/register', {
      email,
      password,
      username,
      first_name,
      last_name,
    })
    .then((res) => {})
    .catch((err) => {});
};
