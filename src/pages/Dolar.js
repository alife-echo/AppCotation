import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet,Button,Image} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Dolar(){
  const [dolar,setDolar] = useState(null)
  const getCotationDolar = async () => {
     try{
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
        const data = await response.json()
        console.log(data)
        setDolar(data.USDBRL.ask)
     }
     catch(e){
        alert('Error ao buscar dados')
     }
  }
useEffect(()=> {
  getCotationDolar()
})
  return(
      <View style={styles.container}>
          <Image style={styles.imgDolar} source={require('../../assets/dolar.png')}></Image>
          <Text style={styles.textTitle}>O dolar americano está</Text>
          <Text style={styles.valueDolar}>R$ {dolar}</Text>
          <TouchableOpacity style={styles.btn} onPress={getCotationDolar}>
          <Text style={styles.textBtn}>Atualizar</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#121212'
  },
  imgDolar:{
    width:270,
    height:230
  },
  btn:{
    marginTop:30,
    padding:20,
    width:120,
    borderRadius:10,
    backgroundColor:'#BFE562'
  },
  textBtn:{
    textAlign:'center',
     fontWeight:'bold'
  },
  textTitle:{
     marginTop:30,
     fontSize:25,
     color:'white'
  },
  valueDolar:{
    marginTop:15,
    fontSize:55,
    color:'white'
  }
})