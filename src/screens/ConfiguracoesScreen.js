import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ConfiguracoesScreen = ({ navigation }) => {
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);
  const userInfo = {
    nome: 'André Guimarães Lira',
    pontos: '213234',
  };

  const handleLogout = () => {
    // Implementar lógica de logout
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Definições</Text>
        <Icon name="settings" size={24} color="#FFF" />
      </View>

      <View style={styles.content}>
        {/* Perfil Section */}
        <Text style={styles.sectionTitle}>PERFIL</Text>
        <View style={styles.profileSection}>
          <Text style={styles.userName}>{userInfo.nome}</Text>
          <Text style={styles.userPoints}>{userInfo.pontos} Pontos</Text>
        </View>

        {/* Main Options */}
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Alterar a Senha</Text>
        </TouchableOpacity>

        <View style={styles.paymentSection}>
          <Text style={styles.optionText}>Informação de Pagamento</Text>
          <Text style={styles.subOptionText}>Adicionar Cartão de Crédito</Text>
        </View>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Dados Pessoais</Text>
        </TouchableOpacity>

        {/* Face ID and Logout */}
        <View style={styles.bottomSection}>
          <View style={styles.faceIdContainer}>
            <Text style={styles.optionText}>Habilitar Face ID</Text>
            <Switch
              value={faceIdEnabled}
              onValueChange={setFaceIdEnabled}
              trackColor={{ false: '#4f4f4f', true: '#81b0ff' }}
              thumbColor={faceIdEnabled ? '#f5dd4b' : '#f4f3f4'}
              style={styles.switch}
            />
          </View>

          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="home" size={24} color="#FFF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Reservar')}
        >
          <Icon name="shopping-bag" size={24} color="#FFF" />
          <Text style={styles.navText}>Reservar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('CartoesAcesso')}
        >
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
    backgroundColor: '#333',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    color: '#999',
    fontSize: 14,
    marginBottom: 15,
  },
  profileSection: {
    marginBottom: 30,
  },
  userName: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 5,
  },
  userPoints: {
    color: '#FFF',
    fontSize: 16,
  },
  optionButton: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  optionText: {
    color: '#FFF',
    fontSize: 16,
  },
  paymentSection: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  subOptionText: {
    color: '#999',
    fontSize: 14,
    marginTop: 5,
  },
  bottomSection: {
    marginTop: 'auto',
    marginBottom: 20,
  },
  faceIdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  logoutButton: {
    paddingVertical: 15,
  },
  logoutText: {
    color: '#FFF',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'rgba(139, 104, 3, 1)',
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

export default ConfiguracoesScreen;
