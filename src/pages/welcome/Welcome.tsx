import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

import WateringImg from '../../assets/watering.png';

import style from './style';

function Welcome(){
    const navigation = useNavigation();

    function navigationToUserIdentification(){
        navigation.navigate('UserIdentification');
    }

    return(
    <SafeAreaView style={style.container}>
        <View style={style.wrapper}>
            <Text style={style.title}>
                Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Text>
            <Image 
                source={WateringImg} 
                style={style.image}
                resizeMode='contain'
                />
            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>
            <TouchableOpacity 
                style={style.button}
                onPress={navigationToUserIdentification}
                >
                <Feather 
                    name="chevron-right"
                    size={30}
                    style={{color: '#fff'}}
                />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}

export default Welcome;