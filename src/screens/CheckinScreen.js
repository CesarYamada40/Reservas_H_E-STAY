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
import { useReservation } from '../context/ReservationContext';
import QRCode from 'react-native-qrcode-svg';

const CheckinScreen = ({ navigation }) => {
  const { currentReservation, checkinCompleted } = useReservation();

  if (!currentReservation) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Check-in</Text>
          <View style={styles.headerRight} />
        </View>
        
        <View style={styles.noReservationContainer}>
          <Icon name="info-outline" size={48} color="#FFF" />
          <Text style={styles.noReservationText}>
            Você não possui uma reserva ativa.
          </Text>
          <TouchableOpacity 
            style={styles.makeReservationButton}
            onPress={() => navigation.navigate('Reservar')}
          >
            <Text style={styles.makeReservationText}>Fazer uma Reserva</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Check-in</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.qrCodeContainer}>
          <Text style={styles.qrTitle}>QR CODE FAST CHECK IN</Text>
          <View style={styles.qrWrapper}>
            <QRCode
              value={JSON.stringify({
                reservationId: currentReservation.id,
                guestName: currentReservation.guestName,
                checkIn: currentReservation.checkIn,
                checkOut: currentReservation.checkOut,
              })}
              size={200}
              backgroundColor="transparent"
              color="#FFF"
            />
          </View>
        </View>

        <View style={styles.reservationDetails}>
          <Text style={styles.detailsTitle}>Detalhes da Reserva</Text>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Hóspede</Text>
            <Text style={styles.detailValue}>{currentReservation.guestName}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Check-in</Text>
            <Text style={styles.detailValue}>{currentReservation.checkIn}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Check-out</Text>
            <Text style={styles.detailValue}>{currentReservation.checkOut}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Número de Hóspedes</Text>
            <Text style={styles.detailValue}>{currentReservation.guests}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Número do Quarto</Text>
            <Text style={styles.detailValue}>{currentReservation.roomNumber}</Text>
          </View>
        </View>

        {!checkinCompleted && (
          <TouchableOpacity 
            style={styles.completeCheckinButton}
            onPress={() => navigation.navigate('Conta')}
          >
            <Text style={styles.completeCheckinText}>Finalizar Check-in</Text>
          </TouchableOpacity>
        )}
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
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Conta')}
        >
          <Icon name="person" size={24} color="#FFF" />
          <Text style={styles.navText}>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Menu')}
        >
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
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  noReservationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noReservationText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  makeReservationButton: {
    backgroundColor: 'rgba(139, 104, 3, 1)',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  makeReservationText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  qrTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
  },
  qrWrapper: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
  },
  reservationDetails: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
  },
  detailsTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
  },
  detailItem: {
    marginBottom: 15,
  },
  detailLabel: {
    color: '#999',
    fontSize: 14,
    marginBottom: 5,
  },
  detailValue: {
    color: '#FFF',
    fontSize: 16,
  },
  completeCheckinButton: {
    backgroundColor: 'rgba(139, 104, 3, 1)',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  completeCheckinText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
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

export default CheckinScreen;
