import { StyleSheet,ImageBackground} from 'react-native'
import React from 'react'

const BackgroundImageContainer = ({children}:{children : React.ReactNode}) => {
  return (
    <ImageBackground source={require('../Assets/Images/backgroundImage.png')} style={styles.mainContainer}>
        {children}
    </ImageBackground>
  )
}

export default BackgroundImageContainer

const styles = StyleSheet.create({
    mainContainer: {
        height:'100%'
      }
})