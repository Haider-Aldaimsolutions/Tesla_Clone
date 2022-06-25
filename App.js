import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,ImageBackground, View } from 'react-native';
import react from "react";
import Header from './components/header';
import Carlist from './components/carlist'; //we dont need to mention index.js becaue it will bydefault look for "index" file 
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Carlist />
     
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
  
   
  },
  
});
