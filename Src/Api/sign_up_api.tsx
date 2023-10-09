import axios from './BaseApi';
type onboardingDataProps = {
    name: string,
    email: string,
    password: string,
    measurementSystem:string ,
    height: string,
    age: string,
    gender: string,
    weight: string,
    trainingGoal: string,
    workoutFrequency: string,
    workoutFrequencyType: string,
    workoutDuration: string,
    referralCode: string
  }
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
        const response = (await axios.post('/api/v4/signup',onboardingData)).data
        // .then(({data}) =>{
        //   if(data.status === "success"){
        //       Alert.alert('Successfully Saved','Your Data is saved ',[
        //         {
        //           text:'Ok',
        //           style:'cancel',
        //           onPress:()=>setCheckOnboarding(true)
        //         }
        //       ])
        //   }

        return response
        
        // }
         
        //   );
      }catch(error){
        console.log(error);
        
      }
    
    }