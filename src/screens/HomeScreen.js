import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>ANDRÉ GUIMARÃES LIRA</Text>
          <Text style={styles.points}>213.234 PONTOS</Text>
        </View>
        <TouchableOpacity>
          <Icon name="notifications-none" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>EISTAY</Text>
      </View>

      {/* Main Buttons */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.smallButton]}>
            <Text style={styles.buttonText}>Fazer{'\n'}Check-in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.smallButton]}>
            <Text style={styles.buttonText}>Reservas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.smallButton]}>
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.button, styles.largeButton]}>
          <Text style={styles.buttonText}>Explorar</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#FFF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="shopping-bag" size={24} color="#FFF" />
          <Text style={styles.navText}>Reservar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="credit-card" size={24} color="#FFF" />
          <Text style={styles.navText}>Cartões</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={24} color="#FFF" />
          <Text style={styles.navText}>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="menu" size={24} color="#FFF" />
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  userName: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  points: {
    color: '#FFF',
    fontSize: 14,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  logo: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  buttonContainer: {
    padding: 20,
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  smallButton: {
    flex: 0.48,
    height: 80,
  },
  largeButton: {
    width: '100%',
    height: 80,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#FFF',
    fontSize: 12,
    marginTop: 5,
  },
});

export default HomeScreen;
