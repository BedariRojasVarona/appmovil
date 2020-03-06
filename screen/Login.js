import React,{Component} from 'react';
import {StyleSheet, ActivityIndicator,Modal,View, ScrollView,} from 'react-native';
import { Container,Content, Card, CardItem, Text, Body,Button,Item,Input,Icon } from 'native-base';



class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      nombre:'',
      contraseña:'',
      isloading: true,
    } 
  } //END CONSTRUCTOR*/
  ShowHideActivityIndicator = () =>{
    const navegar=this.props.navigation;
    if(this.state.isLoading == true)
    {
      this.setState({isLoading: false})
    }
    else
    {
      this.setState({isLoading: true})
      setTimeout(() => {
        navegar.navigate('Inicio',{nombre:this.state.nombre,contraseña:this.state.contraseña});
        this.setState({isLoading: false})
      },2000);
    }
  }


  render(){
    const navegar = this.props.navigation;
    return (
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
                        <Input placeholder="Nombre de usuario" value={this.state.nombre} onChangeText={(nombre)=> this.setState({nombre}) } />
                      </Item>
                      <Item inlineLabel last>
                        <Icon type='FontAwesome' name='lock' />
                        <Input placeholder="Contraseña" value={this.state.contraseña} onChangeText={(contraseña)=> this.setState({contraseña}) } /> 
                    </Item>
                  </Body>
                </CardItem>
                  <Button rounded info onPress={this.ShowHideActivityIndicator}>
              <Text> 
                  Entrar 
              </Text>
             </Button>
                <CardItem footer bordered>
                  <Text style={misEstilos.textCenter}>REGISTRATE</Text>
                </CardItem>
              
              <CardItem>
              <Button rounded warning
                onPress={() => {
                  navegar.navigate('Registro', {
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
