// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AcademicAppointment, AcademicKadro, FacList} from '../screens';
import Login from '../screens/Login/LoginAkademik';



const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="AcademicKadro"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={AcademicAppointment} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="FacultyList" component={FacList} />
      <Stack.Screen name="AcademicKadro" component={AcademicKadro} />
    
    </Stack.Navigator>
  );
}

export default Navigation;
