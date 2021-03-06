import React from 'react';
import {
  NavigationContainer
} from '@react-navigation/native'
import Route from './src/routes/route';
import AppLoading from 'expo-app-loading';
import { 
    useFonts,
    Jost_400Regular,
    Jost_600SemiBold
  } from '@expo-google-fonts/jost';

export default function App(){
    const [fontsLoader] = useFonts({
      Jost_400Regular,
      Jost_600SemiBold
    });

    if(!fontsLoader){
      return(
        <AppLoading/>
      );
    }else{
      return(
        <NavigationContainer>
          <Route/>
        </NavigationContainer>
      )
    }
}