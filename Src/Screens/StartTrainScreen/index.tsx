import { Image, Modal, Pressable, Text, View } from 'react-native'
import React, { useState,useEffect, useContext } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { styles } from './style'
import BackgroundImageContainer from '../../Components/BackgroundImageContainer'

import BackIcon from 'react-native-vector-icons/MaterialIcons';
import ChoseItemContainer from '../../Components/ChoseItemContainer'
import ScreenButtonComponent from '../../Components/ScreenButtonComponent'
import ButtonComponent from '../../Components/ButtonComponent'
import { color } from '../../Constants/Colors'
import { signUpDetailContext } from '../../ContextApi/SignUpContextApi'
import { SignUpStackParamList } from '../../NavigationComponents/OnboardingScreens'

type StartTrainScreenProps = NativeStackScreenProps<SignUpStackParamList, 'StartTrainScreen'>

type TrainStepsData = {
  id:number;
  title :string;
  isSelected: boolean;
  value: number;
}

const stepsList: TrainStepsData[] = [
  {
    id:1,
    title: 'Lose Weight',
    value: 12,
    isSelected: false,
  },
  {
    id:2,
    title:'Improve Cardio',
    value: 13,
    isSelected: false,
  },
  {
    id:3,
    title:'Improve Strength',
    value: 14,
    isSelected: false,
  },
  {
    id:4,
    title:'Improve cross-country skiling skills',
    value: 15,
    isSelected: false,
  },
  {
    id:5, 
    title:'Improve balance and body control',
    value: 16,
    isSelected: false,
  },
  {
    id:6,
    title:'Rather not say',
    value: 17,
    isSelected: false,
  },
]

const StartTrainScreen = ({ navigation }: StartTrainScreenProps) => {
  const {setGoalList,goalList} = useContext(signUpDetailContext);
  const [trainingSteps, setTrainingSteps]  = React.useState<TrainStepsData[]>(stepsList);
  

  const handleItemSelected = (id:number) => {
    setTrainingSteps((prevValue) =>
    prevValue.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          isSelected: !element.isSelected, 
        };
      } else {
        return element; 
      }
    })
  );
  }

 

  const [notifyModalVisible, setNotifyModalVisible] = useState(false);
  const [trackModalVisible, settrackModalVisible] = useState(false);

  const buttonHandler = () => {
    settrackModalVisible(true)
  }
  const trackButtonHandler = ()=>{
    settrackModalVisible(false)
    setTimeout(()=>{
      setNotifyModalVisible(true)

    },200)

  }
  const navigateHandler = ()=>{
    navigation.navigate('WorkoutsWeeklyScreen');
    setNotifyModalVisible(false)
  }

  useEffect(()=>{

    let listOfGoal:number[] =[];
    trainingSteps.map((element)=>{
        if(element.isSelected === true){
          listOfGoal.push(element.value);
        }
    })
       listOfGoal.join(',');      
       
      setGoalList(listOfGoal.join(','));
      

  },[navigation,handleItemSelected])

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
            <Text style={styles.title}>Select your training goals</Text>
            <Text style={styles.subTitle}>Step 3 of 5</Text>
          </View>
          <View style={styles.itemContainer}>
           {
             trainingSteps.map((element)=>
             <ChoseItemContainer selected={element.isSelected} onPress={()=>handleItemSelected(element.id)}>{element.title}</ChoseItemContainer>

             ) 
           }
          </View>
          <View style={styles.buttonContainer}>
            <ScreenButtonComponent onPress={buttonHandler} >Next</ScreenButtonComponent>
          </View>

        </View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={trackModalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image source={require('../../Assets/Images/notifyIcon.png')} />
              <View>
                <Text style={styles.notifyTitle}>Would you like to track your performance?</Text>
                <Text style={styles.notifySubTitle}>Turn on notifications to keep track of your activity and get notified when you hit new achievements.</Text>
              </View>
              <View style={styles.trackButtonContainer}>
                <ButtonComponent borderWidth={2} borderColor={color.inputBorderColor} color='black' backgroundColor='white' onClick={trackButtonHandler}>No thanks</ButtonComponent>
                <ButtonComponent borderWidth={2} borderColor={color.notifyModalButtonColor} color='black' backgroundColor={color.notifyModalButtonColor} onClick={trackButtonHandler}>No thanks</ButtonComponent>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType='fade'
          transparent={true}
          visible={notifyModalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.notifyModalView}>
              <View style={styles.notifyTitleContainer}>
                <Text style={styles.notifyTitle}>“Nordic Strong” would like to sen you notifications</Text>
                <Text style={styles.notifySubTitle}>Notifications may include alerts, sounds and icon badges. These can be configured in settings.</Text>
              </View>
              <View style={styles.notifyButtonContainer}>
                <ButtonComponent color='black' backgroundColor='white' onClick={navigateHandler}>Don't Allow</ButtonComponent>
                <View style={styles.verticalLine}></View>
                <ButtonComponent color='black' backgroundColor='white' fontfamily='SpaceGrotesk-Bold' onClick={navigateHandler}>Allow</ButtonComponent>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </BackgroundImageContainer>
  )
}

export default StartTrainScreen

