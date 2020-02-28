import React,{Component} from 'react';
import {Container, Content, Text, Button, View, CardItem} from 'native-base';
import {StyleSheet} from 'react-native';

import 'react-native-gesture-handler';

class Inicio extends Component {

  render() {
    const navegar = this.props.navigation;
      return(
      <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
      <View style={misEstilos.center}>
        <Text style={misEstilos.title}>Bienvenido: {this.props.route.params.usuario}</Text>
        <Text style={misEstilos.title}>Tu contraseña es: {this.props.route.params.contrasena}</Text>
        <CardItem>
        <Button sucess = {misEstilos.boton} 
                    onPress ={() => {
                        navegar.navigate('Login',{
                        });
                    }}>

                  <Text>Regresar a Login</Text>
            </Button>
            </CardItem>
            <CardItem>
            <Button success = {misEstilos.boton} 
                    onPress ={() => {
                        navegar.navigate('Registro',{
                        });
                    }}>

                  <Text>Regresar a Registro</Text>
            </Button>
            </CardItem>
      </View>
      </Content>
      </Container>
    );
  }
};

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  boton: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 12,
    marginBottom: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Inicio;