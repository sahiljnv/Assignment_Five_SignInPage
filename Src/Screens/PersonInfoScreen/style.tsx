import { StyleSheet } from "react-native";
import { width,height } from "../../constants/screenHeightAndWidth";
import { color } from "../../constants/Colors";
 export const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:height
    },
    upperContainer:{
        height:'15%'
    },
    skipContainer:{
        alignItems:'flex-end',
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
        borderTopRightRadius: width * .05
    },
    titleContainer:{
        flex:1,
        alignItems:'center',
        paddingTop:20
    },
    infoContainer:{
        flex:7,
        paddingHorizontal:width*.05
    },
    buttonContainer:{
        flex:2,
        alignItems:'center',
    } ,
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
    inputContainer:{
        borderColor: color.inputBorderColor,
        borderWidth:2,
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    input:{
        color:'black',
        paddingLeft:10,
        flex:9
    },
    genderContainer:{
        flexDirection:'row',
        height:55,
        borderColor: color.inputBorderColor,
        borderWidth:2,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,


    },
    genderText:{
        color:'black',
    },
    centeredView: {
        flex:1,
        justifyContent:'flex-end',
        backgroundColor:'rgba(0,0,0,0.5)',
      },
      dateCenterdView:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:'rgba(0,0,0,0.5)',
      },
      modalView: {
        width:width,
        alignItems: 'center',
        height:height*.35,
        
        backgroundColor: 'white',
        borderTopLeftRadius: width * .05,
        borderTopRightRadius: width * .05,
       
      },
      dateModal:{
        alignItems:'center'
      },
      calender:{
        borderRadius:width*.05, 
        height:height*.45, 
        width:width*.9
      },

      modalTitleContainer:{
        flex:1,
        width:width,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
      },
      listContainer:{
        flex:3,
        width:width,
      },
      modalTitle:{
        fontSize:20,
        fontFamily:'SpaceGrotesk-Bold',
        color:'black'
      },
      modalItemContainer:{
        flex:1,
        borderTopWidth:2,
        borderColor:color.inputBorderColor
      },
      modalItemText:{
        color:'black',
        fontSize:15,
        fontFamily:'SpaceGrotesk-SemiBold',
        paddingTop:10,
        paddingLeft:10
      },
      selectItem:{
        opacity:0.5
      },
      crossIconContainer:{
        position:'absolute',
        right:20
      },
      inputContianerText:{
        color:'black',
        fontSize:15,
        fontFamily:"SpaceGrotesk-SemiBold"
      },
      measurIconContainer:{
          paddingRight:10
      }
})