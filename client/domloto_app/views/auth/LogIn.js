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
  Label,
  Toast,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../../style/globa';
import AsyncStorage from '@react-native-community/async-storage';

const LogIn = (props) => {
  //State del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [mensaje, setMensaje] = useState(null);

  //React Navigation
  const navigation = useNavigation();

  const handleSubmit = async (props)=>{
    fetch("http://192.168.0.102:4000/api/user/login",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "usuario":email,
       "clave":password
     })
    })
    .then(res=>res.json())
    .then(async (data)=>{
           try {
             console.log('Data: ', data);
             await AsyncStorage.setItem('token',data.token)
             props.navigation.replace("home")
           } catch (e) {
             console.log("error hai",e)
              Alert(e)
           }
    })
 }

  //Mostrar mensaje al usuario
  const mostrarAlerta = () => {
    Toast.show({
      text:mensaje,
      botonTexto: 'OK',
      duration: 5000
    });
  }

  return (
    <Container style={(globalStyles.contenedor, {backgroundColor: '#e84347'})}>
      <View style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>DOM LOTO</H1>
        <Form>
          <Item floatingLabel inlineLabel last style={globalStyles.input}>
            <Label>Usuario o Correo</Label>
            <Input
              placeholder="Usuario o Correo"
              onChangeText={(texto) => setEmail(texto.toLocaleLowerCase())}
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
          onPress={() => navigation.navigate('LeadingPage')}>
          Crear Cuenta
        </Text>
        {/* {mensaje && mostrarAlerta()} */}
      </View>
    </Container>
  );
};

export default LogIn;
