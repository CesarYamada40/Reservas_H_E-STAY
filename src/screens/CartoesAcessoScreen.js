import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Share,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

const CartoesAcessoScreen = ({ navigation }) => {
  const reservaInfo = {
    nome: 'André Guimarães Lira',
    local: 'Essence Business & Living',
    cidade: 'Rondonópolis',
    checkIn: '24/04/2026',
    checkOut: '27/04/26',
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Reserva EISTAY\nHóspede: ${reservaInfo.nome}\nLocal: ${reservaInfo.local}\nCheck-in: ${reservaInfo.checkIn}\nCheck-out: ${reservaInfo.checkOut}`,
      });
    } catch (error) {
      console.log(error.message);
    }
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
        <Text style={styles.headerTitle}>Cartões de Acesso</Text>
        <View style={styles.headerRight} />
      </View>

      <Text style={styles.subTitle}>QR CODE FAST CHECK IN</Text>

      {/* Card Container */}
      <View style={styles.cardContainer}>
        <Text style={styles.nome}>{reservaInfo.nome}</Text>
        
        <View style={styles.localContainer}>
          <Text style={styles.local}>{reservaInfo.local}</Text>
          <Text style={styles.cidade}>{reservaInfo.cidade}</Text>
        </View>

        <View style={styles.datesContainer}>
          <View>
            <Text style={styles.dateLabel}>Check In</Text>
            <Text style={styles.date}>{reservaInfo.checkIn}</Text>
          </View>
          <View>
            <Text style={styles.dateLabel}>Check Out</Text>
            <Text style={styles.date}>{reservaInfo.checkOut}</Text>
          </View>
        </View>

        <View style={styles.qrContainer}>
          <QRCode
            value="https://eistay.com/checkin/123456"
            size={150}
            color="black"
            backgroundColor="white"
          />
        </View>

        <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
          <Icon name="share" size={24} color="#666" />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Text style={styles.logo}>EISTAY</Text>
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
  subTitle: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  cardContainer: {
    backgroundColor: '#FFF',
    margin: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  nome: {
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
  },
  localContainer: {
    marginBottom: 20,
  },
  local: {
    fontSize: 16,
    color: '#666',
  },
  cidade: {
    fontSize: 14,
    color: '#666',
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateLabel: {
    fontSize: 14,
    color: '#666',
  },
  date: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  qrContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  shareButton: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    fontSize: 24,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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

export default CartoesAcessoScreen;
