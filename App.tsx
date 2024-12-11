import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('./assets/building-bg.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.userName}>ANDRÉ GUIMARÃES LIRA</Text>
          <Text style={styles.points}>213.234 PONTOS</Text>
          <Ionicons name="notifications-outline" size={24} color="white" style={styles.bell} />
        </View>

        <View style={styles.logo}>
          <Text style={styles.logoText}>E-STAY</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Fazer Check-in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Reservas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.comprarButton]}>
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.explorarButton]}>
            <Text style={styles.buttonText}>Explorar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(218, 165, 32, 0.8)',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  points: {
    color: 'white',
    fontSize: 14,
  },
  bell: {
    position: 'absolute',
    right: 0,
  },
  logo: {
    alignItems: 'center',
    marginVertical: 50,
  },
  logoText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 15,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  comprarButton: {
    width: '40%',
    alignSelf: 'flex-end',
  },
  explorarButton: {
    marginTop: 'auto',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: 'goldenrod',
        tabBarInactiveTintColor: '#666',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Reservar"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cartões"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="card-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Conta"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
