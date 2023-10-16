import { Text, Pressable } from 'react-native'
import React from 'react'
import { color } from '../../constants/Colors'
import { styles } from './style'
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

