import { Alert, Modal, Pressable, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SignUpStackParamList } from '../../navigation-components/navigation'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { signUpDetailContext } from '../../context-api/sign-up-context-api';
import BackgroundImageContainer from '../../components/background_image_container';
import { styles } from './style'
import ScreenButtonComponent from '../../components/screen_button_component';
import KeyboardAvoiderContainer from '../../components/key_board_avoider_container';
import Arrow from 'react-native-vector-icons/AntDesign';
import Cross from 'react-native-vector-icons/Entypo';
import CalendarIcon from 'react-native-vector-icons/Feather';
import { gender } from '../../constants/Gender';
import { Calendar } from 'react-native-calendars';


type PersonInfoProps = NativeStackScreenProps<SignUpStackParamList, 'PersonInfoScreen'>;
const PersonInfoScreen = ({ navigation }: PersonInfoProps) => {
  const { 
    fullName, 
    setFullName, 
    setGenderOfPerson, 
    genderOfPerson,
    selectDate,
    setSelectDate,
    setPersonHeight,
    setPersonWeight,
    personHeight,
    personWeight
  } = useContext(signUpDetailContext)
  const [modalVisible, setModalVisible] = useState(false);
  const [dateModal, setDateModal] = useState<boolean>(false);
  const [checkDateSelected, setCheckDateSelected] = useState<boolean>(false);
  const modalHandler = (item: string) => {
    setModalVisible(false)
    setGenderOfPerson(item)
  }
  const cancelIconHandler = () => {
    setModalVisible(false)

  }
  const OnPressHandler=()=>{
    if( genderOfPerson !== 'Gender' && selectDate!=='' && personHeight!=='' && personHeight!==''){
      navigation.navigate('MeasurementsScreen')
    }else{
      Alert.alert('Fill All Detail', 'Please fill all detail.', [
        {
          text: 'Ok',
          style: 'cancel',
        }
       
      ]);
    }

  }
  return (
    <BackgroundImageContainer>
                <KeyboardAvoiderContainer>

        <View style={styles.mainContainer}>
          <View style={styles.upperContainer}>
            <Pressable style={styles.skipContainer} onPress={OnPressHandler}>
            <Text style={styles.skip}>Skip</Text>

            </Pressable>
          </View>

          <View style={styles.lowerContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Tell us a bit about yourself</Text>
              <Text style={styles.subTitle}>Step 1 of 5</Text>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.inputContainer}>
                <TextInput placeholder='Full Name' style={styles.input} placeholderTextColor='gray' value={fullName} onChangeText={setFullName} />

              </View>
              <Pressable style={styles.genderContainer} onPress={() => setModalVisible(true)}>
                <Text style={styles.genderText}>{genderOfPerson}</Text>
                <Arrow name='down' color='black' size={20} />
              </Pressable>
              <Pressable style={styles.genderContainer} onPress={() => setDateModal(true)}>
                <Text style={[styles.genderText, { color: checkDateSelected ? 'black' : 'rgba(0,0,0,0.5)' }]}>{selectDate}</Text>
                <CalendarIcon name='calendar' color='black' size={20} />
              </Pressable>
              <View style={styles.inputContainer}>
                <TextInput keyboardType='numeric' placeholder='Height' style={styles.input} placeholderTextColor='gray'  onChangeText={setPersonHeight}/>
                <Pressable style={styles.measurIconContainer}>
                <Text style={styles.inputContianerText}>cm</Text>
                </Pressable>
              </View>
              <View style={styles.inputContainer}>
                <TextInput keyboardType='numeric' placeholder='Weight' style={styles.input} placeholderTextColor='gray' onChangeText={setPersonWeight} />
                <Pressable style={styles.measurIconContainer}>
                <Text style={styles.inputContianerText}>kg</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <ScreenButtonComponent onPress={OnPressHandler}>Next</ScreenButtonComponent>
            </View>
          </View>

          <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalTitleContainer}>
                  <Text style={styles.modalTitle}>Gender</Text>
                  <Pressable style={({ pressed }) => pressed ? [styles.crossIconContainer, styles.selectItem] : styles.crossIconContainer} onPress={cancelIconHandler}>
                    <Cross name='cross' color='black' size={20} />
                  </Pressable>
                </View>
                <View style={styles.listContainer}>
                  {
                    gender.map((item) => (
                      <Pressable style={({ pressed }) => pressed ? [styles.modalItemContainer, styles.selectItem] : styles.modalItemContainer} key={item} onPress={() => modalHandler(item)}>
                        <Text style={styles.modalItemText}>{item}</Text>
                      </Pressable>
                    ))
                  }
                </View>

              </View>
            </View>
          </Modal>
          <Modal
            animationType='fade'
            transparent={true}
            visible={dateModal}
          >
            <View style={styles.dateCenterdView}>
              <View style={styles.dateModal}>
                <Calendar style={styles.calender}
                  onDayPress={day => {
                    setSelectDate(day.dateString);
                    setCheckDateSelected(true)
                    setTimeout(()=>{
                      setDateModal(false);
                    },
                    200)
                  }}
                  markedDates={{
                    [selectDate] :{selected:true}
                  }}
                 
                />
              </View>
            </View>
          </Modal>

        </View>
        </KeyboardAvoiderContainer>

    </BackgroundImageContainer>
  )
}

export default PersonInfoScreen

