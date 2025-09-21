import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles';
import { dealsById } from '../data/deals';
import { useReservations } from '../store/reservations';

export default function DealScreen({ route, navigation }) {
  const { dealId } = route.params;
  const deal = dealsById[dealId];
  const { addReservation } = useReservations();

  const reserve = () => {
    addReservation(deal);
    Alert.alert('Reserveret ✅', `Du har reserveret: ${deal.title} fra ${deal.vendor}`);
    navigation.navigate('Reservations');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{deal.vendor}</Text>
      <Text style={styles.body}>{deal.title}</Text>
      <Text style={styles.body}>Afhentning: {deal.pickupWindow}</Text>
      <Text style={styles.price}>DKK {deal.price} (før {deal.originalPrice})</Text>

      <TouchableOpacity style={styles.primaryBtn} onPress={reserve}>
        <Text style={styles.primaryBtnText}>Reserver</Text>
      </TouchableOpacity>
    </View>
  );
}
