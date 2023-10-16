import { Pressable, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { SignUpStackParamList } from '../../navigation-components/navigation'
import { styles } from './style'
import BackgroundImageContainer from '../../components/background_image_container'

import BackIcon from 'react-native-vector-icons/MaterialIcons';
import ChoseItemContainer from '../../components/chose_item_container/ChoseItemContainer'
import { signUpDetailContext } from '../../context-api/sign-up-context-api'
import ScreenButtonComponent from '../../components/screen_button_component'

type MeasurementsScreenProps = NativeStackScreenProps<SignUpStackParamList, 'MeasurementsScreen'>

const MeasurementsScreen = ({ navigation }: MeasurementsScreenProps) => {
  const { setMeasurements } = useContext(signUpDetailContext);
  const [checkSelected, setCheckSelected] = useState({
    first: true,
    second: false
  })
  const handleFirstItem = () => {
    if (!checkSelected.first) {
      setCheckSelected({ first: true, second: false })
      setMeasurements('1')
    }

  }
  const handleSecondItem = () => {
    if (!checkSelected.second) {
      setCheckSelected({ first: false, second: true })
      setMeasurements('2')
    }

  }
  const buttonHandler = () => {
    navigation.navigate('StartTrainScreen');
  }

  return (
    <BackgroundImageContainer>
      <View style={styles.mainContainer}>
        <View style={styles.upperContainer}>
          <Pressable style={styles.skipContainer} onPress={() => navigation.goBack()}>
            <BackIcon name='keyboard-arrow-left' color='white' size={40} />
          </Pressable>
          <Pressable style={styles.skipContainer} onPress={buttonHandler}>
            <Text style={styles.skip}>Skip</Text>

          </Pressable>
        </View>
        <View style={styles.lowerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Select measurement system</Text>
            <Text style={styles.subTitle}>Step 2 of 5</Text>
            
          </View>
          <View style={styles.itemContainer}>
              <ChoseItemContainer selected={checkSelected.first} onPress={handleFirstItem}>Metric (m,cm,km,kg)</ChoseItemContainer>
              <ChoseItemContainer selected={checkSelected.second} onPress={handleSecondItem}>Us Standard (ft,in,mi,lbs)</ChoseItemContainer>
            </View>
          <View style={styles.buttonContainer}>
            <ScreenButtonComponent onPress={buttonHandler} >Next</ScreenButtonComponent>
          </View>

        </View>
      </View>
    </BackgroundImageContainer>
  )
}

export default MeasurementsScreen

