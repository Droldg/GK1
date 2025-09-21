import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';
import { deals } from '../data/deals';

export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={deals}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 12, padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Deal', { dealId: item.id })}
          >
            <Text style={styles.cardTitle}>{item.vendor}</Text>
            <Text style={styles.cardMeta}>{item.title} · {item.pickupWindow}</Text>
            <Text style={styles.price}>DKK {item.price} (før {item.originalPrice})</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        accessibilityRole="button"
        style={styles.primaryBtn}
        onPress={() => navigation.navigate('Map')}
      >
        <Text style={styles.primaryBtnText}>Se kort</Text>
      </TouchableOpacity>

      <TouchableOpacity
        accessibilityRole="button"
        style={styles.secondaryBtn}
        onPress={() => navigation.navigate('Reservations')}
      >
        <Text style={styles.secondaryBtnText}>Gå til mine reservationer</Text>
      </TouchableOpacity>
    </View>
  );
}