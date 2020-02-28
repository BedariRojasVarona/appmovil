import React, {Component} from 'react';
import {Container, Content, Card, CardItem, Text, Body, Button, Input, Item, Icon} from 'native-base';
import {StyleSheet} from 'react-native';

class Registro extends Component{
  constructor(props){
    super(props);
    this.state = {usuario:'',correo:'',contrasena:''};
  }

  mensaje = ()=>{alert('Datos guardados')};
    render() {
      const navegar = this.props.navigation;
  return (
      <Container>
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
                        <Input type="text"
                            value={this.state.usuario}
                            onChangeText={(usuario)=>this.setState({usuario})}
                        />
              </Item>
                  <Item inlineLabel last>
                    <Icon type = 'Entypo' name = 'email'></Icon>
                    <Input type="text"
                      value={this.state.correo}
                      onChangeText={(correo)=>this.setState({correo})}
                    />
                  </Item>
            <Item inlineLabel last>
                      <Icon type = 'FontAwesome' name = 'lock'></Icon>
                      <Input type="password"
                          value={this.state.contrasena}
                          onChangeText={(contrasena)=>this.setState({contrasena})}
                      />
            </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary onPress={misEstilos.boton}>
                <Text> Registrate </Text>
              </Button>
            </CardItem>
              <CardItem footer bordered>
              <Button rounded dark style = {misEstilos.boton} 
                    onPress ={() =>
                        navegar.navigate('Login',{
                            contrasena: this.state.contrasena,
                            usuario: this.state.usuario})}>
                    <Text>Regresar</Text>
              </Button>
              </CardItem>
              <CardItem footer bordered>
              <Button primary style = {misEstilos.boton} 
                  onPress ={() =>
                      navegar.navigate('Bienvenida',{
                          contrasena: this.state.contrasena,
                          usuario: this.state.usuario
                      })}>
                  <Text> Entrar </Text>
              </Button>
              </CardItem>
          </Card>
        </Content>
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

export default Registro;

