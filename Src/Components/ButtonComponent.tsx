import { View, Text, Pressable, StyleSheet, GestureResponderEvent } from 'react-native'
import React, { CSSProperties } from 'react'
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

const styles = StyleSheet.create({
    buttonInnerContainer: {
        alignItems: 'center',
        width: 150,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        marginHorizontal:5
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'SpaceGrotesk-Medium'
    },
    button: {
        opacity: 0.5
    }
})