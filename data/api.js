import {Alert} from 'react-native';

const URL_DATA = 'http://127.0.0.1/login/data/';

class API {
    
    async validarLog(user, pass){
        const query = await fetch(`${URL_DATA}Login.php?user=${user}&pass=${pass}`);
        const data = await query.json();
        return data;
    }
    registerData(email, user, pass){
        fetch(`${URL_DATA}Register.php`,{
            method: 'POST',
            body: JSON.stringify({
                pEmail: email,
                pUser: user,
                pPass : pass
            }),
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then(response => response.json())
        .catch(error=>console.error('Error: ',error))
        .then(response => {
            if(response.status == 1){
                Alert.alert('Registro exitoso');
            }
            else{
                Alert.alert('Ocurrio un error');
            }
        });
    }
}

export default new API()