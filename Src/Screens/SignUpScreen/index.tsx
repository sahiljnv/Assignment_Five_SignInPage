import { Text, View, TextInput, Alert } from 'react-native'
import React, { useContext } from 'react'
import BackgroundImageContainer from '../../Components/BackgroundImageContainer'
import FacebookIcon from 'react-native-vector-icons/Entypo';
import GoogleIcon from 'react-native-vector-icons/AntDesign';
import AppleIcon from 'react-native-vector-icons/AntDesign';
import ScreenButtonComponent from '../../Components/ScreenButtonComponent';
import { signUpDetailContext } from '../../ContextApi/SignUpContextApi';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './style';
import KeyboardAvoiderContainer from '../../Components/KeyboardAvoiderContainer';
import { checkEmailAndPassword, isSubstring } from '../../Uitils/uitility';
import { SignUpStackParamList } from '../../NavigationComponents/OnboardingScreens';

type SignUpProps = NativeStackScreenProps<SignUpStackParamList, 'SignUpScreen'>


const SignUpScreen = ({ navigation }: SignUpProps) => {
    const { setFullName, setEmail, setPassword, fullName, email, password } = useContext(signUpDetailContext)
    const handleNavigation = () => {
        if (checkEmailAndPassword(fullName,email,password)) {
            navigation.navigate('PersonInfoScreen')
        } else {
            Alert.alert('Fill All Detail', 'Fill all detail and set password minimum 8 character.', [
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
                    <View style={styles.upperContainer}></View>


                    <View style={styles.lowerContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Sign up</Text>
                            <Text style={styles.subTitle}>Create a new account.</Text>
                        </View>
                        <View style={styles.detailContainer}>
                            <View style={styles.inputContainer}>

                                <TextInput placeholder='Full Name' placeholderTextColor='black' onChangeText={setFullName} style={styles.input} />
                            </View>
                            <View style={styles.inputContainer}>

                                <TextInput placeholder='Email Address' placeholderTextColor='black' onChangeText={setEmail} style={styles.input} inputMode='email' />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput placeholder='Password' placeholderTextColor='black' onChangeText={setPassword} style={styles.input} />

                            </View>
                            <View style={styles.socialMediaContainer}>
                                <View style={styles.socialMedia}>
                                    <View style={styles.iconContainer}>
                                        <FacebookIcon name='facebook-with-circle' color='blue' size={30} />
                                    </View>

                                    <Text style={styles.socialMediaText}>Continue with Facebook</Text>
                                </View>
                                <View style={styles.socialMedia}>
                                    <View style={styles.iconContainer}>
                                        <GoogleIcon name='google' color='black' size={30} />
                                    </View>
                                    <Text style={styles.socialMediaText}>Continue with Google</Text>

                                </View>
                                <View style={styles.socialMedia}>
                                    <View style={styles.iconContainer}>
                                        <AppleIcon name='apple1' color='black' size={30} />
                                    </View>
                                    <Text style={styles.socialMediaText}>Continue with Apple</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.LoginContainer}>
                            <ScreenButtonComponent onPress={handleNavigation} >Sign Up</ScreenButtonComponent>
                            <Text style={styles.LoginContainerText}>Have an account?<Text style={styles.LoginContainerBoldText}> Log in</Text></Text>
                        </View>

                    </View>

                </View>
            </KeyboardAvoiderContainer>

        </BackgroundImageContainer>
    )
}

export default SignUpScreen

