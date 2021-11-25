import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { REGISTER } from '../../constants/routeNames';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import Message from '../common/Message';
import styles from './styles';

const LoginComponent = ({ value, placeholder }) => {
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
        <Message
          retry
          retryFn={() => {
            console.log(`222`, 222);
          }}
          info
          onDismiss={() => {
            console.log(`111`, 111);
          }}
          message='Invalid Credentials'
        />
        <View style={styles.form}>
          <Input label='Username' placeholder='Enter Username' value={value} />
          <Input
            label='Password'
            secureTextEntry={true}
            placeholder='Enter Password'
            icon={<Text>HIDE</Text>}
            iconPosition='right'
          />

          <CustomButton primary title='Submit' />
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
