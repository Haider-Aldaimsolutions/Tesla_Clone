import react from "react";
import {Pressable, Button, StyleSheet, Text,ImageBackground, View } from 'react-native';
import styles from './styles';
const Styledbutton=(props)=> {
    
    //const type=props.type;
    //const content=props.content;
    //const onPress=props.onPress;
    const{type,content,onPress}=props;
    
    const backgroundColor= type=== 'primary'?'black':'white';
    const textcolor= type=== 'primary'?'white':'black';
    

    const consolewarning=() =>{{console.warn("hey There")}};
    return (
    <View style={styles.container} >
        <Pressable
            style={ [styles.buttonstyle,{backgroundColor:backgroundColor} ]} 
            onPress={()=>onPress()} >
                <Text style={ [styles.buttontext,{color:textcolor}]}>
                {content}
                </Text> 
        </Pressable>
    </View>
  );
};  
export default Styledbutton; 
