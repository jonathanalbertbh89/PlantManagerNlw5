import React from 'react';
import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack'

import Welcome from '../pages/welcome/Welcome';
import UserIdentification from '../pages/user-identification/UserIdentification';


const Route: React.FC = () => {
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="UserIdentification" component={UserIdentification}/>
        </Stack.Navigator>
    )
}     

export default Route;