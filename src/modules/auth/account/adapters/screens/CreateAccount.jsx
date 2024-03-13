import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Icon, Image } from "@rneui/base";
import Logo from '../../../../../../assets/img/restaurante.png'
import { isEmpty } from 'lodash'
import Loading from '../../../../../kernel/components/Loading';


export default function CreateAccount(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [passwordc, setPasswordc] = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const [showPasswordc, setShowPasswordc] = useState(true)
  const [showErrorMessage, setShowErrorMessage] = useState('')
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  //Ahora aqui debemos de crear la logica para poder crear un nuevo usuario, esto basado en la documentacion y en lo que hicimos en clase
  const register = async () => {
    if (!isEmpty(email) && (!isEmpty(password) && !isEmpty(passwordc) && (password == passwordc))) {
      //AQUI TENGO QUE PREGUNTAR QUE CUANDO YO PONGO EL SETLOAFDING YA NO ME DEJA REGISTRARLO PERO YO SE QUE ES POR QUE
      // COMO ES PARA DECIRLE QUE ESTA UNA OPERACION DE CARGA ESTA EN CURSO Y ENTONCES NOSE DONDE DEL EL FALSE EN EL FLUJO DEL CODIGO
      // este es el metodo para agregar un nuevo usuario en general es el  createUserWithEmailAndPassword lo que hace que se registre un nuevo usuario
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigation.navigate('Login')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

    } else {
      setShowErrorMessage('Campos obligatorios/constrasenias no conciden')
    }

  }

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo}
        resizeMode="contain"
      />
      <Input
        placeholder='20223tn068@utez.edu.mx'
        onChange={({ nativeEvent: { text } }) => setEmail(text)}
        label="Correo  electronico"
        labelStyle={styles.label}
        containerStyle={styles.input}
        keyboardType="email-address"
        rightIcon={<Icon
          type='material-community'
          name='email'
        />}

        errorMessage={showErrorMessage}
      />


      <Input
        placeholder='**********************'
        onChange={({ nativeEvent: { text } }) => setPassword(text)}
        label="Contrasenia"
        labelStyle={styles.label}
        containerStyle={styles.input}
        secureTextEntry={showPassword}
        rightIcon={<Icon
          type='material-community'
          name={showPassword ? 'eye-outline' : 'eye-off-outline'}
          onPress={() => setShowPassword(!showPassword)} />}
        errorMessage={showErrorMessage}
      />

      <Input
        placeholder='**********************'
        onChange={({ nativeEvent: { text } }) => setPasswordc(text)}
        label="Contrasenia"
        labelStyle={styles.label}
        containerStyle={styles.input}
        secureTextEntry={showPasswordc}
        rightIcon={<Icon
          type='material-community'
          name={showPassword ? 'eye-outline' : 'eye-off-outline'}
          onPress={() => setShowPasswordc(!showPasswordc)} />}
        errorMessage={showErrorMessage}
      />

      <Button
        title="Registrar"
        onPress={register}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center', // Vertical
    alignItems: 'center', // horizontal
    padding: 16
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16
  },
  input: {
    marginVertical: 8
  },
  label: {
    color: '#C100FF',
    fontSize: 16
  },
  btnContainer: {
    width: '80%'
  },
  btnStyle: {
    backgroundColor: '#C100FF'
  }
})

/**
*  r = react
*  n = native
*  f = function
*  s = style
*  igual =
*  rnfs
*/