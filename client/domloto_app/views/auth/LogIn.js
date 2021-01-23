import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import {
  Container,
  Button,
  Text,
  H1,
  Input,
  Form,
  Item,
  Label
} from 'native-base';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../../style/globa';
import AsyncStorage from '@react-native-community/async-storage';

const LogIn = ({ navigation }) => {
  //State del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [mensaje, setMensaje] = useState(null);

  //React Navigation
  // const navigation = useNavigation();

  const handleSubmit = async (props) => {
    if (email === '' || password === '') {
      setMensaje('Todos los campos son obligatorios');
      return;
    }

    fetch('http://192.168.0.102:4000/api/auth/LogIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usuario: email,
        clave: password,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          console.log('Data: ', data);

          if (data.success === 1) {
            await AsyncStorage.setItem('token', data.token);
            navigation.replace('MainTabScreen');
            console.log('props: ', props);
          } else if (data.success === 0) {
            setMensaje(data.data);
          }
        } catch (error) {
          console.log('error: ', error);
        }
      });
  };

  //Muestra un mensaje al usuario
  // const mostrarAlerta = () => {
  //   Toast.show({
  //     text1: 'Hello',
  //     text2: 'This is some something 👋'
  //   });
  // }

  return (
    <Container style={(globalStyles.contenedor, {backgroundColor: '#e84347'})}>
      <View style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>DOM LOTO</H1>
        <Form>
          <Item floatingLabel inlineLabel last style={globalStyles.input}>
            <Label>Usuario o Correo</Label>
            <Input
              placeholder="Usuario o Correo"
              onChangeText={(texto) => setEmail(texto)}
              value={email}
            />
          </Item>
          <Item floatingLabel inlineLabel last style={globalStyles.input}>
            <Label>Contraseña</Label>
            <Input
              secureTextEntry={true}
              placeholder="Contraseña"
              onChangeText={(texto) => setPassword(texto)}
              value={password}
            />
          </Item>
        </Form>
        <Button
          square
          block
          style={globalStyles.boton}
          onPress={() => handleSubmit()}>
          <Text style={globalStyles.botonTexto}>Iniciar Sesion</Text>
        </Button>

        <Text
          style={globalStyles.enlace}
          onPress={() => navigation.navigate('SignUp')}>
          Crear Cuenta
        </Text>
        {/* {mensaje && mostrarAlerta()} */}
      </View>
    </Container>
  );
};

export default LogIn;
