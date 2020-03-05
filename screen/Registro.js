import React, { Component } from 'react';
import {StyleSheet, Alert, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Button, Item, Input,Icon } from 'native-base';

class Registro extends Component {
  render() {
    return (
      <Container>
      <ScrollView style={misEstilos.scrollView}>
        <Content padder contentContainerStyle = {misEstilos.content}>
        <Card>
         <Header>
          <Text style = {style}>
            REGISTRATE
          </Text>
        </Header>
            <CardItem header bordered>
            </CardItem>
              <CardItem footer bordered>
              <Button primary style ={misEstilos.boton1}>
                <Icon type = 'AntDesign' name = 'facebook-square' ></Icon>
              </Button>
              <Button danger  style ={misEstilos.boton1}>
                <Icon type = 'Entypo' name = 'google-' ></Icon>
              </Button>
              <Button info style={misEstilos.boton1}>
                <Icon type = 'AntDesign' name = 'twitter'></Icon>
              </Button>
              </CardItem>
            <CardItem >
              <Body>
                <Text>
                  REGISTRAR
                </Text>
              <Item inlineLabel>
              <Icon type = 'FontAwesome' name = 'user-circle-o' ></Icon>
              <Input placeholder= "Nombre:" />
            </Item>
            <Item inlineLabel>
              <Icon type = 'FontAwesome' name = 'user-circle-o'></Icon>
              <Input placeholder= "Apellido:" />
            </Item>
            <Item inlineLabel>
              <Icon type = 'FontAwesome' name = 'comment'></Icon>
              <Input placeholder= "Email:" />
            </Item>
            <Item inlineLabel last>
              <Icon type = 'Foundation' name = 'telephone'></Icon>
              <Input placeholder="Teléfono" />
            </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Text style={misEstilos.textCenter}>¿Ya tienes cuenta?</Text>
            </CardItem>
            <CardItem footer bordered>
            <Button primary style ={misEstilos.boton} onPress = {()=> Alert.alert('REGISTRADO')}>
              <Text>
                Registrar
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

const misEstilos=StyleSheet.create({
  content:{
    flex: 1,
    justifyContent: 'center'
},
  textCenter:{
    justifyContent: 'center',
    width: "100%",
    fontSize: 20
  },
  textColor:{
    color: '#D2B4DE'
  },
  boton:{
    marginLeft: "13%"
  },
  boton1:{
    marginLeft: "10%"
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

export default Registro;



/*https://expo.github.io/vector-icons/*/
/*https://docs.nativebase.io/Components.html#icon-def-headref*/
/*https://es.survivejs.com/react/advanced-techniques/styling-react/*/