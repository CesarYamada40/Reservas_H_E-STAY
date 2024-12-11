import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ConfiguracoesScreen = ({ navigation }) => {
  const [notificacoes, setNotificacoes] = React.useState(true);
  const [localizacao, setLocalizacao] = React.useState(true);
  const [modoEscuro, setModoEscuro] = React.useState(true);

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
        <Text style={styles.headerTitle}>Configurações</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content}>
        {/* Configurações de Conta */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CONTA</Text>
          
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Editar Perfil</Text>
            <Icon name="chevron-right" size={24} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Alterar Senha</Text>
            <Icon name="chevron-right" size={24} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Privacidade</Text>
            <Icon name="chevron-right" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Configurações do Aplicativo */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>APLICATIVO</Text>
          
          <View style={styles.toggleOption}>
            <Text style={styles.optionText}>Notificações</Text>
            <Switch
              value={notificacoes}
              onValueChange={setNotificacoes}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={notificacoes ? '#f5dd4b' : '#f4f3f4'}
            />
          </View>

          <View style={styles.toggleOption}>
            <Text style={styles.optionText}>Localização</Text>
            <Switch
              value={localizacao}
              onValueChange={setLocalizacao}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={localizacao ? '#f5dd4b' : '#f4f3f4'}
            />
          </View>

          <View style={styles.toggleOption}>
            <Text style={styles.optionText}>Modo Escuro</Text>
            <Switch
              value={modoEscuro}
              onValueChange={setModoEscuro}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={modoEscuro ? '#f5dd4b' : '#f4f3f4'}
            />
          </View>
        </View>

        {/* Sobre */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SOBRE</Text>
          
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Versão do App</Text>
            <Text style={styles.versionText}>1.0.0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Termos de Uso</Text>
            <Icon name="chevron-right" size={24} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Política de Privacidade</Text>
            <Icon name="chevron-right" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>
      </ScrollView>
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
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: '#999',
    fontSize: 14,
    marginBottom: 15,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  optionText: {
    color: '#FFF',
    fontSize: 16,
  },
  toggleOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  versionText: {
    color: '#999',
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: '#FF4444',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  logoutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ConfiguracoesScreen;
