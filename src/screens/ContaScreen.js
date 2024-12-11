import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContaScreen = ({ navigation }) => {
  const userInfo = {
    nome: 'André Guimarães Lira',
    membro: 'MEMBER SINCE 2024',
    pontos: '213234',
  };

  const navigateToSettings = () => {
    navigation.navigate('Configuracoes');
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
        <Text style={styles.headerTitle}>Conta</Text>
        <TouchableOpacity 
          style={styles.settingsButton}
          onPress={navigateToSettings}
        >
          <Icon name="settings" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Informações do Usuário */}
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userInfo.nome}</Text>
          <Text style={styles.memberSince}>{userInfo.membro}</Text>
        </View>

        {/* Pontos */}
        <View style={styles.pointsSection}>
          <Text style={styles.pointsLabel}>TOTAL DE PONTOS</Text>
          <Text style={styles.pointsValue}>{userInfo.pontos}</Text>
        </View>

        {/* Opções Principais */}
        <View style={styles.mainOptions}>
          <TouchableOpacity 
            style={styles.optionButton}
            onPress={() => navigation.navigate('CartoesAcesso')}
          >
            <Text style={styles.optionText}>Visualizar cartão</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Apoio cliente É STAY</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Benefícios</Text>
          </TouchableOpacity>
        </View>

        {/* Preferências */}
        <View style={styles.preferencesSection}>
          <Text style={styles.sectionTitle}>PREFERÊNCIAS</Text>
          
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Interesses</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Alimentação e Bebidas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Quarto e Estadia</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
  settingsButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  userInfo: {
    marginBottom: 30,
  },
  userName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  memberSince: {
    color: '#CCC',
    fontSize: 14,
  },
  pointsSection: {
    marginBottom: 30,
  },
  pointsLabel: {
    color: '#CCC',
    fontSize: 14,
    marginBottom: 5,
  },
  pointsValue: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
  },
  mainOptions: {
    marginBottom: 30,
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
  preferencesSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: '#999',
    fontSize: 14,
    marginBottom: 15,
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

export default ContaScreen;
