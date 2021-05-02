import {
    StyleSheet
} from 'react-native'
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

const style = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex: 1,
        width: '100%',
    },
    form:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    emoji:{
        fontSize: 44
    },
    title:{
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    input:{
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    textIsFocused: {
        borderColor: colors.green
    },
    containerButton:{
        width: '100%',
        marginTop: 40,
        
    }
});

export default style;