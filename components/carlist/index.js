import react from "react";
import { StyleSheet,FlatList,Dimensions, Text,ImageBackground, View } from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../carItem';

const Carlist=(props)=> {
    return(
        <View style={styles.container}>
            
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={cars}
            renderItem={({item})=><CarItem car={item} /> }
            snapToAlignment={"start"}
            decelerationRate={"fast"}
            snapToInterval={Dimensions.get("window").height}
            />


        </View>
    )
}
export default Carlist;