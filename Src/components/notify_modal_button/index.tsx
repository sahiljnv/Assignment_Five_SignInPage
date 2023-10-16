import { Text, View, Pressable } from 'react-native'
import React from 'react'
import { styles } from './style'
type NotifyModalButtonProps = {
    children: React.ReactNode,
    color:string,
    onClick:()=>{},
    backgroundColor:string
}
const NotifyModalButton :React.FC<NotifyModalButtonProps> = (props) => {
    const {children,color,backgroundColor,onClick} = props
  return (
    <Pressable style={({pressed})=>pressed?styles.button:null} onPress={onClick}>
    <View style={[styles.buttonInnerContainer, {backgroundColor : backgroundColor}]}>
        <Text style={[styles.buttonText, {color:color}]}>{children}</Text>
       
    </View>
</Pressable>
  )
}

export default NotifyModalButton

