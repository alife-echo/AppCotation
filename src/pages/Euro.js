import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet,Button,Image,TouchableOpacity} from 'react-native'

export default function Euro(){
  const [euro,setEuro] = useState(null)
  const getCotationEuro = async () => {
     try{
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/EUR-BRL')
        const data = await response.json()
        console.log(data)
        setEuro(data.EURBRL.ask)
     }
     catch(e){
        alert('Error ao buscar dados')
     }
  }
useEffect(()=> {
  getCotationEuro()
})

  return(
    <View style={styles.container}>
    <Image style={styles.imgEuro} source={require('../../assets/euro.png')}></Image>
    <Text style={styles.textTitle}>O euro está</Text>
    <Text style={styles.valueEuro}>R$ {euro}</Text>
    <TouchableOpacity style={styles.btn} onPress={getCotationEuro}>
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
  imgEuro:{
    width:200,
    height:180
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
  valueEuro:{
    marginTop:15,
    fontSize:55,
    color:'white'
  }
})