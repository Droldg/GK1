import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { useReservations } from '../store/reservations';

export default function ReservationsScreen() {
  const { reservations, clearReservations } = useReservations();

  if (!reservations.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Mine reservationer</Text>
        <Text style={styles.body}>Du har endnu ingen reservationer 🧺</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Mine reservationer</Text>

      <FlatList
        data={reservations}
        keyExtractor={(item, idx) => `${item.id}-${item.reservedAt}-${idx}`}
        contentContainerStyle={{ gap: 12, padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.vendor}</Text>
            <Text style={styles.cardMeta}>{item.title} · {item.pickupWindow}</Text>
            <Text style={styles.price}>DKK {item.price} (før {item.originalPrice})</Text>
            <Text style={styles.cardMeta}>Reserveret: {new Date(item.reservedAt).toLocaleString()}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.secondaryBtn} onPress={clearReservations} accessibilityRole="button">
        <Text style={styles.secondaryBtnText}>Ryd alle</Text>
      </TouchableOpacity>
    </View>
  );
}