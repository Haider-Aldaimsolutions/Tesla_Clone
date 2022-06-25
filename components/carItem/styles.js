import { StyleSheet, Dimensions} from "react-native";

const styles=StyleSheet.create({

    CarContainer:{
        width:"100%",
        height: Dimensions.get('window').height, 
      },
      Titles:{
        marginTop:"30%",
        width: '100%',
        alignItems:"center",
      },
      TextContainer:{
        fontSize:36,
        fontWeight:"500",
       
      },
      SubtextContainer:{
         fontSize:16,
         color:"#5c5e62",
    
      },
      image:{
       width:"100%",
       height: "100%",
       resizeMode:"cover",
       position:"absolute",
    
      },
      ButtonContainer:{
        position:"absolute",
        bottom:50,
        width:"100%",
      },
      taglineCTN:{
        textDecorationLine:"underline",
      }
});
export default styles;