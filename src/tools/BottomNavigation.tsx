import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Welcome from '../screens/Welcome';
import About from '../screens/About';
import ToDoList from '../screens/List';
import AddPage from '../screens/AddNote';
const Tab = createBottomTabNavigator();
const BottomTabs: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: 'blue',
        activeBackgroundColor:'#f1f1f1',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Welcome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ToDoList}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="AddNote"
        component={AddPage}
        options={{
          tabBarLabel: 'AddNote',
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={About}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )

}

export default BottomTabs;