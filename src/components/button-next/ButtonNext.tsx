import React from 'react';
import { View, TouchableOpacity,TouchableOpacityProps, Text } from 'react-native'
import styles from './styles';

interface ButtonNextProps extends TouchableOpacityProps{
    name: string;
    onPress: () => void;
}

const ButtonNext: React.FC<ButtonNextProps> = ({
    name,
    onPress,
    ...rest
}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonNext;