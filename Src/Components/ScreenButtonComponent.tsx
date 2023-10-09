import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
type screenProps = {
    children : React.ReactNode,
    onPress: ()=>void
}
const ScreenButtonComponent = ({children, onPress}: screenProps) => {
  return (
    <Pressable style={({pressed})=>pressed?styles.button:null} onPress={onPress}>
    <View style={styles.buttonInnerContainer}>
        <Text style={styles.buttonText}>{children}</Text>
       
    </View>
</Pressable>
  )
}

export default ScreenButtonComponent

const styles = StyleSheet.create({
    buttonInnerContainer:{
        alignItems:'center',
       width:200,
       height:50,
        borderRadius:50,
        justifyContent:'center',
        backgroundColor:'black'
    },
    buttonText:{
        color:'white',
        fontSize:15,
        fontFamily:'SpaceGrotesk-Bold'
    },
    button:{
        opacity:0.5
    }
})