import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { color } from '../Constants/Colors'
import { width } from '../Constants/screenHeightAndWidth'
type ChoseItemContainerProps = {
    children : React.ReactNode, 
    selected : boolean,
    onPress : ()=>void
}
const ChoseItemContainer = ({children, selected,onPress} : ChoseItemContainerProps) => {
  return (
    <Pressable style={[styles.itemContainer, {borderColor: selected?'black' : color.inputBorderColor}]} onPress={onPress}>
     <Text style={styles.itemText}>{children}</Text>  
    </Pressable>
  )
}

export default ChoseItemContainer

const styles = StyleSheet.create({
    itemContainer:{
        height:50,
        width:width*.9,
        borderWidth:2,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10

    },
    itemText:{
        color:'black',
        fontFamily:'SpaceGrotesk-Medium',
        fontSize:15
    }

})