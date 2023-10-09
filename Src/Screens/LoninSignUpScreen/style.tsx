import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
       flex:1
    },
    img: {
       width: '90%',
        height: Dimensions.get('screen').height * 0.09
    },
    imageContainer: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent:'space-evenly'
    },
   
})