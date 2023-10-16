import { KeyboardAvoidingView, ScrollView } from 'react-native'
import { styles } from './style'
type KeyboardAvoiderContainerProps = {
    children: React.ReactNode
}
const KeyboardAvoiderContainer = ({children} : KeyboardAvoiderContainerProps ) => {
    return (
        <KeyboardAvoidingView style={styles.mainComponent} behavior='height'>
            <ScrollView style={styles.scrollView}>{children }
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default KeyboardAvoiderContainer

