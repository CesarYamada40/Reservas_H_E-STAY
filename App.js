import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ReservarScreen from './src/screens/ReservarScreen';
import LocalizacaoScreen from './src/screens/LocalizacaoScreen';
import { ReservationProvider } from './src/context/ReservationContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ReservationProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Reservar" component={ReservarScreen} />
          <Stack.Screen name="Localizacao" component={LocalizacaoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReservationProvider>
  );
}