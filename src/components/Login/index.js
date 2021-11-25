import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LOGIN_LOADING } from '../../constants/actionTypes';
import { REGISTER } from '../../constants/routeNames';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import Message from '../common/Message';
import styles from './styles';

const LoginComponent = ({ error, onChange, onSubmit, loading }) => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to iContact</Text>
        <Text style={styles.subTitle}>Please login here</Text>
        <View style={styles.form}>
          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message='invalid credentials'
            />
          )}
          {error?.error && <Message onDismiss danger message={error?.error} />}
          <Input
            label='Username'
            placeholder='Enter Username'
            onChangeText={(value) => {
              onChange({ name: 'userName', value });
            }}
          />
          <Input
            label='Password'
            secureTextEntry={true}
            placeholder='Enter Password'
            icon={<Text>HIDE</Text>}
            iconPosition='right'
            onChangeText={(value) => {
              onChange({ name: 'password', value });
            }}
          />

          <CustomButton
            disabled={loading}
            onPress={onSubmit}
            loading={loading}
            primary
            title='Submit'
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
