import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useReservation } from '../context/ReservationContext';

const locaisSugeridos = [
  'São Paulo, SP',
  'Rio de Janeiro, RJ',
  'Salvador, BA',
  'Florianópolis, SC',
  'Porto Alegre, RS',
  'Curitiba, PR',
];

const LocalizacaoScreen = ({ navigation }) => {
  const [busca, setBusca] = useState('');
  const { setLocation } = useReservation();

  const selecionarLocal = (local) => {
    setLocation(local);
    navigation.goBack();
  };

  const locaisFiltrados = locaisSugeridos.filter(local =>
    local.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Onde?</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Campo de Busca */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#FFF" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Para onde você vai?"
          placeholderTextColor="#999"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      {/* Lista de Locais */}
      <FlatList
        data={locaisFiltrados}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.locationItem}
            onPress={() => selecionarLocal(item)}
          >
            <Icon name="location-on" size={24} color="#FFF" />
            <Text style={styles.locationText}>{item}</Text>
          </TouchableOpacity>
        )}
        style={styles.locationList}
      />
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
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
  },
  locationList: {
    flex: 1,
    marginTop: 16,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  locationText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 12,
  },
});

export default LocalizacaoScreen;
