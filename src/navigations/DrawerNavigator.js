import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { Image, SafeAreaView } from 'react-native';
import Container from '../components/common/Container';
import { HOME_NAVIGATOR } from '../constants/routeNames';
import { GlobalContext } from '../context/Provider';
import Settings from '../screens/Settings';
import HomeNavigator from './HomeNavigator';
import SideMenu from './SideMenu';
const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const { authDispatch } = useContext(GlobalContext);
  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) =>
        getDrawerContent(navigation, authDispatch)
      }
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
