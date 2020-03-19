import React,{Component} from 'react';
import {StyleSheet, ActivityIndicator,Modal,View, ScrollView,AppRegistry,TouchableOpacity,TextInput,Keyboard, Alert} from 'react-native';
import { Container,Content, Card, CardItem, Text, Body,Button,Item,Input,Icon } from 'native-base';
import api from '../data/api';


class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      pass:''} 
  } //END CONSTRUCTOR*/


  login = async () =>{
    let validarLog = await api.validarLog(this.state.username, this.state.pass)

    if(validarLog.status == 1){
      this.props.navigation.navigate('Principal');
    }
    else{
      Alert.alert('Usuario o clave invalidos');
    }
  }

  state={
    showIndicator:false,
}
onButtonPress=()=>{
    this.setState({
        showIndicator:true
    }),
this.props.navigation.navigate('Inicio',{contrasena:this.state.contrasena, usuario:this.state.usuario});
}

state = {switchValue:false}
toggleSwitch = (value) => {
  this.setState({switchValue: value})
}
		
      
  

  render(){
    const navegar = this.props.navigation;
    if(this.state.showIndicator){
    return (
      <View style={misEstilos.content}>
                    <ActivityIndicator size="large" color="FFFFFF"></ActivityIndicator>
                </View>
            );
        }else{
        return(
      <Container>
        <ScrollView style={misEstilos.scrollView}>
          <Content padder contentContainerStyle={misEstilos.content}>
            <Card>
              {
                this.state.isLoading ?  
                <Modal
                  transparent = {true} 
                  animationType = {'none'} 
                  visible = {this.state.isloading}> 
                    <View style = {misEstilos.modalBackground}> 
                      <View style = {misEstilos.activityIndicator}> 
                        <ActivityIndicator style={{padding: 20}}/> 
                      </View> 
                    </View> 
                </Modal> : null
              }
                <CardItem header bordered>
                  <Text style={misEstilos.textCenter}>Inicio de sesión</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Item inlineLabel>
                      <Icon type='FontAwesome' name='user' />
                        <Input placeholder="Nombre de usuario" 
                        onChangeText={username => this.setState({username})}/>
                      </Item>
                      <Item inlineLabel last>
                        <Icon type='FontAwesome' name='lock' />
                        <Input placeholder="Contraseña" 
                        onChangeText={pass => this.setState({pass})}
                        secureTextEntry={true}/> 
                    </Item>
                  </Body>
                </CardItem>
                  <Button rounded info onPress={() => {this.login() }}>
              <Text>Entrar</Text>
             </Button>
                <CardItem footer bordered>
                  <Text style={misEstilos.textCenter}>REGISTRATE</Text>
                </CardItem>
              
              <CardItem>
              <Button rounded warning
                onPress={() => {
                  navegar.navigate('Registro', {
                    pass: this.state.pass,
                    username: this.state.username,
                    titulo: 'tambien puedes entrar con aluguna red social',
                  });
                }}>
                <Text>
                  REGISTRATE
                </Text>
              </Button>
              </CardItem>

              <CardItem>
              <Button rounded danger
                onPress={() => {
                  navegar.navigate('Principal', {
                    titulo: 'Registro',
                  });
                }}>
                <Text>
                  Movies
                </Text>
              </Button>
              </CardItem>

              <CardItem>
              <Button rounded danger
                onPress={() => {
                  navegar.navigate('Principal1', {
                    titulo: 'Registro',
                  });
                }}>
                <Text>
                  STAR WARS
                </Text>
              </Button>
              </CardItem>
            </Card>
          </Content>
      </ScrollView>
    </Container>
    ); 
  } 
} 
}


const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
    width: '100%',
    fontSize: 20
  },
  modalBackground : {
    flex : 1 ,
    alignItems : 'center' ,
    flexDirection : 'column' ,
    justifyContent : 'space-around' ,
    backgroundColor : '#D2B4DE'
  },
  activityIndicator : {
    backgroundColor : '#D2B4DE' ,
    height : 100 ,
    width : 100 ,
    borderRadius : 10 ,
    display : 'flex' ,
    alignItems : 'center' ,
    justifyContent : 'space-around'
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 0,
  }
});

const style = {
    color: 'white',
    fontSize: 30,
};

export default Login;
