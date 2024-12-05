import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dolar from './src/pages/Dolar';
import Euro from './src/pages/Euro';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()

export default function App() {

  return (
    <NavigationContainer>
    <Drawer.Navigator>
        <Drawer.Screen  name="Dolar" component={Dolar}/>
        <Drawer.Screen name="Euro" component={Euro}/> 
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
