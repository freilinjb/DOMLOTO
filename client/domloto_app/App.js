import 'react-native-gesture-handler';
import React, {useEffect, useState, useContext} from 'react';
import { StatusBar } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';


import SignUp from './views/auth/SignUp';
import LogIn from './views/auth/LogIn';
import LeadingPage from './views/LeadingPage';

import HomeScreen from './views/HomeScreen';
import MainTabScreen from './views/MainTabScreen';
import LoadingScreen from './views/LoadingScreen';



const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoggein, setLogged] = useState(null);

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };

  useEffect(() => {
    detectLogin();
  }, []);

  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'}/>
      <NavigationContainer>
      <Drawer.Navigator>
            {
              isLoggein == null ? 
              (<Drawer.Screen name="Loading" component={LoadingScreen} options={{ title: 'Registrarse'}} />) 
              : isLoggein == true ? 
              (
              <>
                <Drawer.Screen name="MainTabScreen" component={MainTabScreen} options={{ title: 'MainTabScreen'}} />
                <Drawer.Screen name="Registrarse1" component={HomeScreen} options={{ title: 'Registrarse3'}} />
                <Drawer.Screen name="LeadingPage" component={LeadingPage} options={{ title: 'LeadingPage'}} />
              </>)
              :
              (
                <>
                  <Drawer.Screen name="LeadingPage" component={LeadingPage} options={{ title: 'LeadingPage'}} />
                  <Drawer.Screen name="SignUp" component={SignUp} options={{ title: 'Registrarse'}} />
                  <Drawer.Screen name="LogIn" component={LogIn} options={{ title: 'Iniciar Sesion', headerShown: false}}/>   
                </>
              )
            }
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
