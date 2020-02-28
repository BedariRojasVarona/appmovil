import React, {Component} from 'react';
import {Container, Content, Card, CardItem, Text, Body, Button, Input, Item, Icon,View} from 'native-base';
import {StyleSheet,ActivityIndicator} from 'react-native';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={usuario:'',contrasena:''};
  }
  state ={
    showIndicador:false,
  }
  onButtonPress=()=>{
    this.setState({
      showIndicador:true
    }),
    this.props.navigation.navigate('Inicio',{contrasena:this.state.contrasena,usuario:this.state.usuario});
  }
    render(){
        const navegar = this.props.navigation;
        if(this.state.showIndicador){
            return (
                <View style={misEstilos.content}>
                    <ActivityIndicator size="large" color="FFFFFF"></ActivityIndicator>
                </View>
            );
            }else{
              return(
    <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style = {misEstilos.textCenter}>Inicio de Sesion</Text>
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
                        <Icon type = 'FontAwesome' name = 'lock'></Icon>
                        <Input type="password"
                            value={this.state.contrasena}
                            onChangeText={(contrasena)=>this.setState({contrasena})}
                        />
                    </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button success = {misEstilos.boton} onPress= {() => {navegar.navigate('Registro',{
                contrasena: this.contrasena,
                usuario:this.state.usuario})}
              }> <Text> Registrate </Text>
              </Button>
              <Button success= {misEstilos.boton1} onPress={this.onButtonPress}>
                <Text> Entrar</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
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

export default Login;