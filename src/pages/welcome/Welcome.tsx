import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';

import WateringImg from '../../assets/watering.png';

import style from './style';

export default function Welcome(){
    return(
    <SafeAreaView style={style.container}>
        <Text style={style.title}>
            Gerencie {'\n'}
            suas plantas {'\n'}
            de forma fácil
        </Text>
        <Image source={WateringImg} style={style.image}/>
        <Text style={style.subtitle}>
            Não esqueça mais de regar suas plantas. 
            Nós cuidamos de lembrar você sempre que precisar.
        </Text>
        <TouchableOpacity style={style.button}>
            <Text>
                >
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
}
