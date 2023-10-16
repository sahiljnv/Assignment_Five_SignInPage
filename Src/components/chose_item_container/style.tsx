import { StyleSheet } from "react-native";
import { width } from "../../constants/screenHeightAndWidth";

export const styles = StyleSheet.create({
    itemContainer:{
        height:50,
        width:width*.9,
        borderWidth:2,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10

    },
    itemText:{
        color:'black',
        fontFamily:'SpaceGrotesk-Medium',
        fontSize:15
    }

})