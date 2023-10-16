import axios from './BaseApi';
import { onboardingDataProps } from './type';
export const logInPostApi= async (email:string, password:string) => {
    try {
         const response =  (await axios.post('/api/v4/login', {
            email: email,
            password: password,
            uniqueId: "",
            authToken: "",
            name: "sahil",
            gender: "Male",
            type: "",
            deviceId: "1212"
        })).data

            return response;

    } catch (error) {

        console.log(error)
    }
}

export const postSignUpApi = async (onboardingData:onboardingDataProps )=>{   
      console.log(onboardingData);
       
      try{
        const response = await axios.post('/api/v4/signup',onboardingData)
        return response.data
      }catch(error){
        console.log(error);
      }
    
    }