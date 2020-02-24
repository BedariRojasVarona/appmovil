import React from 'react';
import {Container, Content, Card, CardItem, Text, Body, Button, Input, Item, Icon} from 'native-base';
import {StyleSheet} from 'react-native';

class Registro extends Component{
    render(){
      const navegar = this.props.navigation;
  return(
    <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style = {misEstilos.textCenter}>
                {this.props.route.params.titulo}
                {this.props.route.params.titulo}
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                  <Icon type = 'FontAwesome' name = 'user'></Icon>
                  <Input placeHolder = 'Nombre de Usuario'/>
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'Entypo' name = 'email'></Icon>
                  <Input placeHolder = 'Correo'/>
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'FontAwesome' name = 'lock'></Icon>
                  <Input placeHolder = 'Contraseña'/>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button success style= {misEstilos.boton} success onPress={()=> navegar.navigate('login')}>
                <Text> Login </Text>
              </Button>
              <Button rounded dark style = {misEstilos.boton1}>
                <Text> Entrar</Text>
              </Button>
            </CardItem>
          </Card>
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

  textCenter:{
    textAlign: 'center',
    width: '100%',
  },

  boton: {
    flex: 1,
    justifyContent: 'center',
    //marginLeft: '35%',
    //justifyContent: 'center',
  },

  boton1: {
    flex: 1,
    justifyContent: 'center',
    //marginLeft: '70%',
    //justifyContent: 'center',
  },


  body: {
    paddingVertical: 35,
  }
  
});

export default Registro;