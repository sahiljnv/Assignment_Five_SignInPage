import { StyleSheet } from "react-native";
import { width, height } from "../../constants/screenHeightAndWidth";
import { color } from "../../constants/Colors";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        height: height
    },
    upperContainer: {
        flex: 1,
        
    },
    lowerContainer: {
        flex: 9,
        backgroundColor: 'white',
        borderTopLeftRadius: width * .05,
        borderTopRightRadius: width * .05
    },
    titleContainer: {

        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailContainer: {
        flex: 7,
        padding: width * .05
    },
    LoginContainer: {
        flex: 3,
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontFamily:'SpaceGrotesk-Bold'
    },
    subTitle: {
        color: 'black',
        fontSize: 15,
        fontFamily:'SpaceGrotesk-Medium'
    },
    socialMedia: {
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.08)',
        paddingLeft: width * .02,
        color: 'black',
        marginVertical: height * .005,
        height: 60,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    socialMediaContainer: {
        paddingTop: 15,
    },
    socialMediaText: {
        color: 'black',
        fontFamily:'SpaceGrotesk-SemiBold'
    },
    LoginContainerText:{
        color:'black',
        paddingTop:10,
        fontFamily:'SpaceGrotesk-Medium '
    },
    LoginContainerBoldText:{
        fontWeight:'bold'
    },
    inputContainer:{
        borderColor: color.inputBorderColor,
        borderWidth:2,
        marginVertical:10
    },
    input:{
        color:'black',
        paddingLeft:10
    },
    iconContainer:{
        position:'absolute',
        left:10
    }



})