import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Container,
  Button,
  Text,
  H1,
  Input,
  Form,
  Item,
  Toast,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../../style/globa';

const SignUp = () => {
  //State del formulario
  const [nombre, seNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [mensaje, setMensaje] = useState(null);

  //React Navigation
  const navigation = useNavigation();

  return (
    <Container style={(globalStyles.contenedor, {backgroundColor: '#e84347'})}>
      <View style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>DOM LOTO</H1>
        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Nombre"
              onChangeText={(texto) => setNombre(texto)}
            />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
                
              autoCompleteType="email"
              placeholder="Email"
              onChangeText={(texto) => setEmail(texto)}
            />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(texto) => setPassword(texto)}
            />
          </Item>
        </Form>
        <Button
          square
          block
          style={globalStyles.boton}
        //   onPress={() => handleSubmit()}
          >
          <Text style={globalStyles.botonTexto}>Crear Cuenta</Text>
        </Button>
        {/* {mensaje && mostrarAlerta()} */}
      </View>
    </Container>
  );
};

export default SignUp;
