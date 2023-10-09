import { Alert, Pressable, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { styles } from './style'
import BackgroundImageContainer from '../../Components/BackgroundImageContainer'
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import ChoseItemContainer from '../../Components/ChoseItemContainer'
import ScreenButtonComponent from '../../Components/ScreenButtonComponent'
import { signUpDetailContext } from '../../ContextApi/SignUpContextApi'
import { SignUpStackParamList } from '../../NavigationComponents/OnboardingScreens'
import { postSignUpApi } from '../../Api/sign_up_api'

type StartWorkoutScreenProps = NativeStackScreenProps<SignUpStackParamList, 'StartWorkoutScreen'>

export type Root ={
  data: boolean
  message: string
  status: string
  technicalDetails: TechnicalDetails
}

export type TechnicalDetails= {}

const StartWorkoutScreen = ({ navigation }: StartWorkoutScreenProps) => {

  const {
    fullName,
    email,
    password,
    genderOfPerson,
    selectDate,
    personHeight,
    personWeight,
    measuremets,
    workoutFrequency,
    workoutDuration,
    goalList,
    setWorkoutDuration,
    setCheckOnboarding
} = useContext(signUpDetailContext)
const onboardingData = {
  name: fullName,
  email: email,
  password: password,
  measurementSystem:measuremets ,
  height: personHeight,
  age: selectDate,
  gender: genderOfPerson,
  weight: personWeight,
  trainingGoal: goalList,
  workoutFrequency: workoutFrequency,
  workoutFrequencyType: "2",
  workoutDuration: workoutDuration,
  referralCode: ""
}

  const [checkSelected, setCheckSelected] = useState({
    first: true,
    second: false,
    third:false,
  })
  const buttonHandler = async() => {
    try {
      const response: Root = await postSignUpApi(onboardingData);
         if(response.status === "success"){
              // Alert.alert('Successfully Saved','Your Data is saved ',[
              //   {
              //     text:'Ok',
              //     style:'cancel',
                  // onPress:()=>
                  setCheckOnboarding(true)
              //   }
              // ])
          }
    } catch (error) {
      console.log(error);
      
    } 
    
    
  }


  const selectedHandler =(selectOption: string) =>{
     switch (selectOption) {
      case 'first':
        if(checkSelected.first===false){
          setCheckSelected({first:true, second:false,third:false})
          setWorkoutDuration('1')
        }
        break;
     
      case 'second':
        if(checkSelected.second===false){
          setCheckSelected({second:true,first:false,third:false})
          setWorkoutDuration('2')
        }
        break;
     
      case 'third':
        if(checkSelected.third===false){
          setCheckSelected({ third:true,first:false,second:false})
          setWorkoutDuration('3')
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
            <Text style={styles.title}>How long do you typically prefer to workout?</Text>
            <Text style={styles.subTitle}>Step 5 of 5</Text>
          </View>
          <View style={styles.itemContainer}>
              <ChoseItemContainer selected={checkSelected.first} onPress={()=>selectedHandler('first')}>Less than 15 mins</ChoseItemContainer>
              <ChoseItemContainer selected={checkSelected.second} onPress={()=>selectedHandler('second')}>15-30 mins</ChoseItemContainer>
              <ChoseItemContainer selected={checkSelected.third} onPress={()=>selectedHandler('third')}>More than 30 mins</ChoseItemContainer>
             </View>
          <View style={styles.buttonContainer}>
            <ScreenButtonComponent onPress={buttonHandler} >Get Started</ScreenButtonComponent>
          </View>
        </View>
      </View>
    </BackgroundImageContainer>
  )
}

export default StartWorkoutScreen

