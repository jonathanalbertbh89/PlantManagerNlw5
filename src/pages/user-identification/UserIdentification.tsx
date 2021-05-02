import React, { useState } from 'react';
import {View, SafeAreaView, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import ButtonNext from '../../components/button-next/ButtonNext';

import styles from './style';

const UserIdentification: React.FC = () =>{
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<String>();

    function handleOnBlur(){
        setIsFocused(false);
    }

    function handleOnFocus(){
        setIsFocused(true);
    }
    function handleInputChange(value: String){
        setIsFilled(!!value);
        setName(value);
    }


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
               <KeyboardAvoidingView style={styles.form}>
                   <Text style={styles.emoji}>
                       😃 
                   </Text>
                   <Text style={styles.title}>
                       Como podemos {'\n'} 
                       chamar você!!??
                   </Text>
                   <TextInput
                        style={[
                            styles.input,
                            isFocused && styles.textIsFocused
                        ]}
                        placeholder = "Digite um nome" 
                        onBlur={handleOnBlur}
                        onFocus={handleOnFocus}
                   />
                   <View style={styles.containerButton}>
                        <ButtonNext name="Confirma" onPress={()=>{}}/>
                   </View>
               </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

export default UserIdentification;