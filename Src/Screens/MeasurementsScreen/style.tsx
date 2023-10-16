import { StyleSheet } from "react-native";
import { width,height } from "../../constants/screenHeightAndWidth";
import { color } from "../../constants/Colors";
 export const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:height
    },
    upperContainer:{
        height:'15%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    skipContainer:{
        
        padding:10
    },
    skip:{
        color:'white',
        fontSize:18,
        fontFamily:'SpaceGrotesk-SemiBold'
    },
    lowerContainer:{
        height:'85%',
        backgroundColor:'white',
        borderTopLeftRadius: width * .05,
        borderTopRightRadius: width * .05,
        alignItems:'center',

    },
    titleContainer:{
        flex:1,
        paddingTop:20,
        alignItems:'center',

    },
    title:{
        color:'black',
        fontSize:20,
        fontFamily:'SpaceGrotesk-Bold',
        
    },
    subTitle:{
        color:'black',
        fontSize:15,
        fontFamily:'SpaceGrotesk-Medium'
    },
    itemContainer:{
        flex:8,
        marginTop:20
    },
    buttonContainer:{
        flex:2,
        justifyContent:'flex-start',
    }
    
})