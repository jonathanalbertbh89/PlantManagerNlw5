import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    wrapper:{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 20
    },
    title:{ 
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 38
    },
    subtitle:{
        textAlign: "center",
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    button:{
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    image:{
        height: Dimensions.get('window').width * 0.7
    }


})
export default style;