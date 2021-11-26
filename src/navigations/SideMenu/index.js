import React from 'react';
import { SafeAreaView, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import { SETTINGS } from '../../constants/routeNames';
import styles from './styles';

const SideMenu = ({ navigation }) => {
  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Text>T</Text>,
      name: 'Logout',
      onPress: () => {},
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <View style={{ paddingHorizontal: 60 }}>
          {menuItems.map(({ name, icon, onPress }) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
