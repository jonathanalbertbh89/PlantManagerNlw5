import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import WateringImg from '../../assets/watering.png';

import style from './style';

function Welcome(){
    return(
    <SafeAreaView style={style.container}>
        <Text style={style.title}>
            Gerencie {'\n'}
            suas plantas {'\n'}
            de forma fácil
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
        <TouchableOpacity style={style.button}>
            <Feather 
                name="chevron-right"
                size={24}
            />
        </TouchableOpacity>
    </SafeAreaView>
    )
}

export default Welcome;