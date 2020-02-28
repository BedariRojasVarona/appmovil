import React,{Component} from 'react';
import {Container, Content, Card, CardItem, Text, Body, Button, Input, Item, Icon, Right} from 'native-base';
import {StyleSheet} from 'react-native';

class Registro extends Component{

  constructor(props){
    super(props);
    this.state = {usuario:'',correo:'',contrasena:''};
  }

  mensaje = ()=>{alert('Datos guardados')};
  render(){
      const navegar = this.props.navigation;
      return(
      <Container>

          <Content padder contentContainerStyle = {misEstilos.content}>
            <Card>

            <CardItem header bordered>
                    <Text style = {misEstilos.textCenter}>Registrar</Text>
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
                <Button dark style = {misEstilos.boton} 
                onPress={this.mensaje} ><Text> Registrar</Text>
                </Button>

                <Button danger = {misEstilos.boton} 
                    onPress ={() =>
                        navegar.navigate('Login',{
                            contrasena: this.state.contrasena,
                            usuario: this.state.usuario})}>
                    <Text>Regresar</Text>
                    </Button>
              </CardItem>

              <CardItem warning> 
                <Button ligh = {misEstilos.boton} 
                    onPress ={() =>
                        navegar.navigate('Inicio',{
                            contrasena: this.state.contrasena,
                            usuario: this.state.usuario
                        })}>
                    <Text>Entrar</Text>
                </Button>
              </CardItem>       

            </Card>

            <Card>
              <CardItem header bordered>
                <Text style = {misEstilos.textCenter}>registrate por medio de:</Text>
              </CardItem>

              <CardItem>
              <Button secundary style={misEstilos.Boton3}><Icon type = 'Entypo' name = 'facebook'></Icon>
                <Text>Facebook</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right></Button>
              </CardItem>

              <CardItem>
              <Button info style={misEstilos.Boton3}><Icon type = 'AntDesign' name = 'twitter'></Icon>
                <Text>Twitter</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right></Button>
              </CardItem>

           </Card>
        </Content>
      </Container>
      );
    };
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
  },

  body: {
    paddingVertical: 35,
  },

  header: {
    justifyContent: 'flex-start',
  },
  Boton3:{
    marginLeft:'30%',
  },
  
});

export default Registro;