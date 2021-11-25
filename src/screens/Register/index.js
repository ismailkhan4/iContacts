import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import RegisterComponent from '../../components/SignUp';
import envs from '../../config/env';
import { LOGIN } from '../../constants/routeNames';
import register, { clearAuthState } from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/Provider';
import axios from '../../helpers/axiosIntercepter';

const Register = () => {
  const [form, setForm] = useState({});
  const { navigate } = useNavigation();
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);
  // console.log(`authState`, authState:{error,loading,data});

  // console.log(`form`, form);
  // useEffect(() => {
  //   axiosInstance.get('/contacts').catch((err) => {
  //     console.log(`err`, err.response);
  //   });
  // }, []);
  // const { DEV_BACKEND_URL } = envs;
  // // console.log(envs);
  // // console.log(BACKEND_URL);
  // console.log('backend url test:', DEV_BACKEND_URL);
  // console.log('BACKEND_URL :>>', { envs });
  // console.log('__DEV__', __DEV__);

  useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      if (data || error) {
        clearAuthState()(authDispatch);
      }
    }, [data, error])
  );

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    if (value !== '') {
      if (name == 'password') {
        if (value.length < 6) {
          setErrors((prev) => {
            return {
              ...prev,
              [name]: 'This field needs minimum 6 (six) characters',
            };
          });
        } else {
          setErrors((prev) => {
            return { ...prev, [name]: null };
          });
        }
      } else {
        setErrors((prev) => {
          return { ...prev, [name]: null };
        });
      }
    } else {
      setErrors((prev) => {
        return { ...prev, [name]: 'This field is required' };
      });
    }
  };

  const onSubmit = () => {
    // console.log('form :>>', form);

    if (!form.userName) {
      setErrors((prev) => {
        return { ...prev, userName: 'Please enter a user name' };
      });
    }
    if (!form.firstName) {
      setErrors((prev) => {
        return { ...prev, firstName: 'Please enter a first name' };
      });
    }
    if (!form.lastName) {
      setErrors((prev) => {
        return { ...prev, lastName: 'Please enter a last name' };
      });
    }
    if (!form.email) {
      setErrors((prev) => {
        return { ...prev, email: 'Please add an email' };
      });
    }
    if (!form.password) {
      setErrors((prev) => {
        return { ...prev, password: 'Please enter a valid password' };
      });
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      console.log(`111`, 111);
      register(form)(authDispatch);
    }
    // validations
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
