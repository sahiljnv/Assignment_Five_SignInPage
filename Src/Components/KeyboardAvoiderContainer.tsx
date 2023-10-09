import { KeyboardAvoidingView, ScrollView } from 'react-native'
import { height } from '../Constants/screenHeightAndWidth'
type KeyboardAvoiderContainerProps = {
    children: React.ReactNode
}
const KeyboardAvoiderContainer = ({children} : KeyboardAvoiderContainerProps ) => {
    return (
        <KeyboardAvoidingView style={{flex:1, height:height , paddingTop:25}} behavior='height'>
            <ScrollView style={{flex:1, height: height }}>{children }
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default KeyboardAvoiderContainer

