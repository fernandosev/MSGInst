import React from 'react';
import {useSelector} from 'react-redux';
import {StatusBar} from 'react-native';

import {navigationRef} from '~/services/navigation';
import Icon from '~/components/Icon';

//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from '~/styles/colors';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

//MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Screens
import SignIn from '~/screens/SignIn';
import Register from '~/screens/Register';
import MyGroups from '~/screens/MyGroups';
import AnotherGroups from '~/screens/AnotherGroups';

export default function Routes() {
  // Redux (auth) global states
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <StatusBar backgroundColor={colors.statusBarColor} />
      <NavigationContainer ref={navigationRef}>
        {/* If the user is not authenticated -> show the Signin screen */}
        {!token && (
          <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        )}

        {token && (
          <Tab.Navigator
            initialRouteName="MyGroups"
            tabBarOptions={{
              activeTintColor: colors.secondaryColor,
              inactiveTintColor: colors.white,
              activeBackgroundColor: colors.primaryColor,
              inactiveBackgroundColor: colors.primaryColor,
            }}>
            <Tab.Screen
              name="MyGroups"
              component={MyGroups}
              options={{
                tabBarLabel: 'Meus grupos',
                tabBarIcon: ({color, size}) => (
                  <Icon
                    type="MaterialCommunityIcons"
                    name="account-group"
                    color={color}
                    size={30}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="AnotherGroups"
              component={AnotherGroups}
              options={{
                tabBarLabel: 'Outros grupos',
                tabBarIcon: ({color, size}) => (
                  <Icon
                    type="MaterialCommunityIcons"
                    name="google-circles-communities"
                    color={color}
                    size={30}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </>
  );
}
