import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {Container, Button, Text} from 'native-base';
import globalStyles from '../style/globa';
import {useNavigation} from '@react-navigation/native';

const LeadingPage = () => {
  const navigation = useNavigation();

  return (
    <Container style={[globalStyles.contenedor, styles.container]}>
      <ImageBackground
        source={require('../images/bg_main.jpeg')}
        style={styles.image}>
        <View style={[globalStyles.contenido, styles.content]}>
          <Text style={styles.heading}>
            Concepto de aplicación de alimentos
          </Text>
          <Text style={styles.title}>Bienvenido!</Text>
          <Text style={styles.subtitle}>
            Gestion de bancas de apuestas
          </Text>

          <View>
            <Button block style={{marginBottom: 10}} rounded bordered light 
            onPress={() => navigation.navigate('LogIn')}>
              <Text style={globalStyles.botonTexto}>Iniciar Sesión</Text>
            </Button>

            <Button
              block
              rounded
              warning
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={globalStyles.botonTexto}>Crear una cuenta</Text>
            </Button>
          </View>
        </View>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#888',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  title: {
    fontSize: 45,
    color: '#fff',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
  },
  heading: {
    color: '#fff',
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
  },
});

export default LeadingPage;
