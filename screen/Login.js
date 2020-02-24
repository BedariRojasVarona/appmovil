import React, { Component } from 'react';
import {Container, Content, Card, CardItem, Text, Body, Button, Input, Item, Icon} from 'native-base';
import {StyleSheet, ScrollView} from 'react-native';

class Login extends Component{
    render() {
      const navegar = this.props.navigation;
  return (
      <Container>
        <ScrollView>
        <Content padder 
                  contentContainerStyle = {misEstilos.Content}>
          <Card style = {misEstilos.textCenter} transparent>
            <CardItem>
              <Body>
                <Text style = {misEstilos.textCenter}>
                  Crea tu sesión.
                </Text> 
              </Body>
            </CardItem>
          </Card>
          <Card style = {misEstilos.textCenter} transparent>
            <CardItem>
              <Body>
                <Text style = {misEstilos.textCenter}>
                Registrate con tu red social.
                </Text> 
              </Body>
            </CardItem>
          </Card>
          <CardItem footer>
                <Button secundary style={misEstilos.Boton3}><Icon type='Entypo' name='facebook'/></Button>
                <Button info style={misEstilos.Boton2}><Icon type='AntDesign' name='twitter'/></Button>
             </CardItem>
          <Card>
            <CardItem header bordered>
              <Text style = {misEstilos.textCenter}>Registrate</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
              <Item inlineLabel>
                <Icon type = 'FontAwesome' name = 'user'></Icon>
              <Input placeholder = 'Nombre'/>
            </Item>
            <Item inlineLabel>
                <Icon type = 'Zocial' name = 'gmail'></Icon>
              <Input placeholder = 'Correo'/>
            </Item>
            <Item inlineLabel>
                <Icon type = 'Entypo' name = 'tablet'></Icon>
              <Input placeholder = 'Numero celular'/>
            </Item>
            <Item inlineLabel last>
                <Icon type = 'FontAwesome' name = 'lock'></Icon>
              <Input placeholder = 'Contraseña'/>  
            </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary onPress= {() => {navegar.navigate('registro',{
                titulo: 'Registro, usuario',
                nombre: 'Bedari'
                })}
              }>
                <Text> Registrate </Text>
              </Button>
              <Button primary style = {misEstilos.boton}><Text> Entrar </Text></Button>
            </CardItem>
          </Card>
        </Content>
        </ScrollView>
      </Container>
  );
    }
};

const misEstilos = StyleSheet.create({
  Content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton:{ 
    
    marginLeft: '70%',
  },
  body:{
    paddingVertical: 35,
  },
  Boton2:{
    marginRight:'30%',
  },
  Boton3:{
    marginLeft:'30%',
  },

});

export default Login;

