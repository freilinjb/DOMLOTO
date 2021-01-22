import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { StatusBar } from 'react-native'
import {Root} from 'native-base';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AsyncStorage from '@react-native-community/async-storage';

import SignUp from './views/auth/SignUp';
import LogIn from './views/auth/LogIn';
import LeadingPage from './views/LeadingPage';

import HomeScreen from './views/HomeScreen';
import LoadingScreen from './views/LoadingScreen';

const Stack = createStackNavigator();

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
        <Stack.Navigator
          headerMode="none"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FFDA00',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            //Cambia el color del boton volver atras
            headerTintColor: '#000',
          }}
          initialRouteName="LogIn">
            {
              isLoggein == null ? 
              (<Stack.Screen name="Loading" component={LoadingScreen} options={{ title: 'Registrarse'}} />) 
              : isLoggein == true ? 
              (<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Registrarse'}} />)
              :
              (
                <>
                  <Stack.Screen name="LeadingPage" component={LeadingPage} options={{ title: 'LeadingPage'}} />
                  <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Registrarse'}} />
                  <Stack.Screen name="LogIn" component={LogIn} options={{ title: 'Iniciar Sesion', headerShown: false}}/>   
                </>
              )
            }
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
