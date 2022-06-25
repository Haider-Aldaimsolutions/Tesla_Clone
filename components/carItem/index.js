import react from "react";
import { StyleSheet, Text,ImageBackground, View,Image } from 'react-native';
import styles from './styles';
import Styledbutton from '../button';


const CarItem=(props)=> {

  const { name, tagline, taglineCTA, image } = props.car;

    const consolewarning1=() =>{{console.warn("CUSTUMER ORDER")}};
    const consolewarning2=() =>{{console.warn("ESISTING INVENTORY")}};
    return (
    
    <View style={styles.CarContainer}>
    
      <ImageBackground 
      source={image} 
      style={styles.image}
      />
    


      <View  style={styles.Titles}>
        <Text style={styles.TextContainer}>
          {name}
        </Text>
       
        <Text style={styles.SubtextContainer}>
          {tagline}
          
          <Text style={styles.taglineCTN}>
            {taglineCTA}
          </Text>
        </Text>
        
      </View>
    
    <View style={styles.ButtonContainer}>  
      
      <Styledbutton  type="primary" 
      content="Custome Order"
      onPress={consolewarning1} />

      <Styledbutton  type="secondary" 
      content="Existing Inventory"
      onPress={consolewarning2} />
    
    </View>

    </View>
  );
}
export default CarItem;