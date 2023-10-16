import {ImageBackground} from 'react-native'
import React from 'react'
import { styles } from './style'

const BackgroundImageContainer = ({children}:{children : React.ReactNode}) => {
  return (
    <ImageBackground source={require('../Assets/Images/backgroundImage.png')} style={styles.mainContainer}>
        {children}
    </ImageBackground>
  )
}

export default BackgroundImageContainer

