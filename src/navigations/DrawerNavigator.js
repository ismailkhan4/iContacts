import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Image, SafeAreaView } from 'react-native';
import Container from '../components/common/Container';
import { HOME_NAVIGATOR } from '../constants/routeNames';
import Settings from '../screens/Settings';
import HomeNavigator from './HomeNavigator';
import SideMenu from './SideMenu';
const getDrawerContent = (navigation) => {
  return <SideMenu navigation={navigation} />;
};
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => getDrawerContent(navigation)}
    >
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{ headerShown: false }}
      ></Drawer.Screen>
      <Drawer.Screen name='Settings' component={Settings}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
