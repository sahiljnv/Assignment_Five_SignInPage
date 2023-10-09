import { Text, View, TextInput, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import BackgroundImageContainer from '../../Components/BackgroundImageContainer'
import FacebookIcon from 'react-native-vector-icons/Entypo';
import GoogleIcon from 'react-native-vector-icons/AntDesign';
import AppleIcon from 'react-native-vector-icons/AntDesign';
import ScreenButtonComponent from '../../Components/ScreenButtonComponent';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './style';
import KeyboardAvoiderContainer from '../../Components/KeyboardAvoiderContainer';
import { signUpDetailContext } from '../../ContextApi/SignUpContextApi';
import { storeTokenId } from '../../Uitils/uitility';
import { SignUpStackParamList } from '../../NavigationComponents/OnboardingScreens';
import { logInPostApi } from '../../Api/sign_up_api';
export type Root={
    data: Data
  }
  
  export type Data = {
    accessToken: string
    email: string
    firstName: string
    id: number
    imageLocation: any
    lastName: any
    refreshToken: string
    uuid: string
  }
type SignUpProps = NativeStackScreenProps<SignUpStackParamList, 'LoginScreen'>


const LoginScreen = ({ navigation }: SignUpProps) => {
    const { setCheckOnboarding } = useContext(signUpDetailContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    const handleNavigation = async () => {


        try {
        const responseData : Root = await logInPostApi(email, password);
        storeTokenId(responseData.data.accessToken)
        setCheckOnboarding(true)
        } catch (error) {
            console.log(error);
            
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

                                <TextInput placeholder='Email Address' placeholderTextColor='black' onChangeText={setEmail} style={styles.input} inputMode='email' />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput placeholder='Password' placeholderTextColor='black' onChangeText={setPassword} style={styles.input} />

                            </View>
                            <View style={styles.forgetPasswordContainer}>
                                <Pressable style={({ pressed }) => pressed ? styles.pressedForget : null}>
                                    <Text style={styles.forgetContainerText}>Forgot password?</Text>
                                </Pressable>
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
                            <ScreenButtonComponent onPress={handleNavigation} >Log in</ScreenButtonComponent>
                            <Text style={styles.LoginContainerText}>Have an account?<Text style={styles.LoginContainerBoldText}> Sign up</Text></Text>
                        </View>
                    </View>

                </View>
            </KeyboardAvoiderContainer>
        </BackgroundImageContainer>
    )
}

export default LoginScreen

