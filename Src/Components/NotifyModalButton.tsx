import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
type NotifyModalButtonProps = {
    children: React.ReactNode
}
const NotifyModalButton = ({children}:NotifyModalButtonProps ) => {
  return (
    <Pressable style={({pressed})=>pressed?styles.button:null} onPress={onClick}>
    <View style={[styles.buttonInnerContainer, {backgroundColor : backgroundColor}]}>
        <Text style={[styles.buttonText, {color:color}]}>{children}</Text>
       
    </View>
</Pressable>
  )
}

export default NotifyModalButton

const styles = StyleSheet.create({
    buttonInnerContainer:{
        alignItems:'center',
       width:150,
       height:50,
        borderRadius:25,
        justifyContent:'center'
    },
    buttonText:{
        color:'white',
        fontSize:15,
        fontFamily:'SpaceGrotesk-Medium'
    },
    button:{
        opacity:0.5
    }
})