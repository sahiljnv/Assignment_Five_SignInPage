import { StyleSheet } from "react-native";
import { width,height } from "../../Constants/screenHeightAndWidth";
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,0.3)'
      },
      modalView: {
        width:350,
        marginHorizontal:10,
        marginVertical:20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      notifyTitle:{
        color:'black',
        fontFamily:'SpaceGrotesk-Bold',
        textAlign:'center',
        fontSize:20,
        paddingTop:10
      },
      notifySubTitle:{
        color:'black',
        fontFamily:'SpaceGrotesk-Medium',
        textAlign:'justify',
        fontSize:15,
        paddingTop:10
      },
      notifyButtonContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderTopWidth:2,
        borderColor:'gray',
        alignItems:'center',
        width:'100%'
      },
      trackButtonContainer:{
        flexDirection:'row',
        paddingTop:20,
        justifyContent:'space-between',
       
      },
      notifyModalView: {
        width:320,
        marginVertical:20,
        backgroundColor: 'white',
        borderRadius: 20,
        
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      notifyTitleContainer:{
        marginBottom:20,
        marginHorizontal:10,
        paddingHorizontal:10,
        paddingVertical:20

      },
      verticalLine:{
        borderColor:'gray',
        borderWidth:1,
        height:'100%',
        backgroundColor:'gray'
      }
})