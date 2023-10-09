import AsyncStorage from "@react-native-async-storage/async-storage";

 export function isSubstring(mainString : string, subString : string) {
    return mainString.slice(-(subString.length), mainString.length)===subString;
  }


  export const storeTokenId = async (token: string) => {    
    console.log('above token');
    
    try {
        await AsyncStorage.setItem(
            'TOKEN',
            token,
        );
       console.log('insight the token');
       
    } catch (error) {
        console.log(error);
    }
};

export  const removeToken  = async () => {
  await AsyncStorage.removeItem('TOKEN');
}

export const checkEmailAndPassword = (fullName : string,email : string, password : string)=>{
  if(fullName.length > 0 && password.length >= 8 && isSubstring(email, '@gmail.com')){
    return true 
  }
  return false
}

