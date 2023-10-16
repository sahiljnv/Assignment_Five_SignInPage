import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { styles } from './style'
import BackgroundImageContainer from '../../components/background_image_container'

import BackIcon from 'react-native-vector-icons/MaterialIcons';
import ChoseItemContainer from '../../components/chose_item_container/ChoseItemContainer'
import ScreenButtonComponent from '../../components/screen_button_component'
import { signUpDetailContext } from '../../context-api/sign-up-context-api'
import { SignUpStackParamList } from '../../navigation-components/onboarding-screens'

type WorkoutsWeeklyScreenProps = NativeStackScreenProps<SignUpStackParamList, 'WorkoutsWeeklyScreen'>

const WorkoutsWeeklyScreen = ({ navigation }: WorkoutsWeeklyScreenProps) => {
  const {setWorkoutFrequency} = useContext(signUpDetailContext)
  const [checkSelected, setCheckSelected] = useState({
    first: true,
    second: false,
    third:false,
  })
  const buttonHandler = () => {
    navigation.navigate('StartWorkoutScreen');
    
  }

  const selectedHandler =(selectOption: string) =>{
     switch (selectOption) {
      case 'first':
        if(checkSelected.first===false){
          setCheckSelected({first:true, second:false,third:false})
          setWorkoutFrequency('1')
        }
        break;
     
      case 'second':
        if(checkSelected.second===false){
          setCheckSelected({second:true,first:false,third:false})
          setWorkoutFrequency('2')
        }
        break;
     
      case 'third':
        if(checkSelected.third===false){
          setCheckSelected({ third:true,first:false,second:false})
          setWorkoutFrequency('3')
        }
        break;
     }
  }
  return (
    <BackgroundImageContainer>
      <View style={styles.mainContainer}>
        <View style={styles.upperContainer}>
          <Pressable style={styles.skipContainer} onPress={() => navigation.goBack()}>
            <BackIcon name='keyboard-arrow-left' color='white' size={40} />
          </Pressable>
          <Pressable style={styles.skipContainer} onPress={() => console.log("lkdjl")}>
            <Text style={styles.skip}>Skip</Text>

          </Pressable>
        </View>
        <View style={styles.lowerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>How many times per week do you usually workout?</Text>
            <Text style={styles.subTitle}>Step 4 of 5</Text>
          </View>
          <View style={styles.itemContainer}>
              <ChoseItemContainer selected={checkSelected.first} onPress={()=>selectedHandler('first')}>Once a week</ChoseItemContainer>
              <ChoseItemContainer selected={checkSelected.second} onPress={()=>selectedHandler('second')}>3-5</ChoseItemContainer>
              <ChoseItemContainer selected={checkSelected.third} onPress={()=>selectedHandler('third')}>5-7</ChoseItemContainer>
             </View>
          <View style={styles.buttonContainer}>
            <ScreenButtonComponent onPress={buttonHandler} >Next</ScreenButtonComponent>
          </View>
        </View>
      </View>
    </BackgroundImageContainer>
  )
}

export default WorkoutsWeeklyScreen

