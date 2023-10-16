import { View, Text, Pressable, GestureResponderEvent } from 'react-native'
import React from 'react'
import { styles } from './style'
type ButtonCompProps = {
    children: string,
    color: string,
    backgroundColor: string,
    borderWidth?:number,
    borderColor?:string,
    onClick: ((event: GestureResponderEvent) => void),
    fontfamily?:string
}
const ButtonComponent = ({ children, color, backgroundColor,borderWidth, borderColor,onClick,fontfamily }: ButtonCompProps) => {
    return (
        
            <Pressable style={({ pressed }) => pressed ? styles.button : null} onPress={onClick}>
                <View style={[styles.buttonInnerContainer, { backgroundColor: backgroundColor,borderWidth:borderWidth,borderColor:borderColor}]}>
                    <Text style={[styles.buttonText, { color: color,fontFamily:fontfamily }]}>{children}</Text>

                </View>
            </Pressable>
    )
}

export default ButtonComponent

