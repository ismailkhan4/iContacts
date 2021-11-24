import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { HOME_NAVIGATOR } from '../constants/routeNames'
import HomeNavigator from './HomeNavigator'

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
