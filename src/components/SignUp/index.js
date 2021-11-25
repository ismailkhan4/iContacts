import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LOGIN } from '../../constants/routeNames';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import Message from '../common/Message';
import styles from './styles';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  loading,
  error,
  errors,
}) => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to iContact</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          {error?.error && (
            <Message
              retry
              danger
              retryFn={() => {
                console.log(`222`, 222);
              }}
              message={error?.error}
            />
          )}
          <Input
            label='Username'
            placeholder='Enter Username'
            error={errors.userName || error?.userName?.[0]}
            onChangeText={(value) => {
              onChange({ name: 'userName', value });
            }}
          />
          <Input
            label='First Name'
            placeholder='Enter First Name'
            onChangeText={(value) => {
              onChange({ name: 'firstName', value });
            }}
            error={errors.firstName || error?.firstname?.[0]}
          />
          <Input
            label='Last Name'
            placeholder='Enter Last Name'
            error={errors.lastName || error?.lastname?.[0]}
            onChangeText={(value) => {
              onChange({ name: 'lastName', value });
            }}
          />
          <Input
            label='Email'
            placeholder='Enter Email'
            error={errors.email || error?.email?.[0]}
            onChangeText={(value) => {
              onChange({ name: 'email', value });
            }}
          />
          <Input
            label='Password'
            secureTextEntry={true}
            placeholder='Enter Password'
            icon={<Text>HIDE</Text>}
            iconPosition='right'
            error={errors.password || error?.password?.[0]}
            onChangeText={(value) => {
              onChange({ name: 'password', value });
            }}
          />
          {/* {console.log(`error`, error)} */}
          <CustomButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            primary
            title='Submit'
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
