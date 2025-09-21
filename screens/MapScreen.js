import { useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from '../styles';
import { deals } from '../data/deals';

export default function MapScreen({ navigation }) {
  const mapRef = useRef(null);

  const initialRegion = {
    latitude: 55.6761,
    longitude: 12.5683,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  };

  useEffect(() => {
    // Fit til alle deals når kortet er klar
    const timeout = setTimeout(() => {
      if (!mapRef.current) return;
      const coords = deals
        .filter(d => typeof d.latitude === 'number' && typeof d.longitude === 'number')
        .map(d => ({ latitude: d.latitude, longitude: d.longitude }));
      if (coords.length) {
        mapRef.current.fitToCoordinates(coords, { edgePadding: { top: 80, right: 40, bottom: 40, left: 40 }, animated: true });
      }
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        initialRegion={initialRegion}
        provider={MapView.PROVIDER_GOOGLE}
      >
        {deals.map((d) => (
          <Marker
            key={d.id}
            coordinate={{ latitude: d.latitude, longitude: d.longitude }}
            title={d.vendor}
            description={`${d.title} · DKK ${d.price}`}
            onCalloutPress={() => navigation.navigate('Deal', { dealId: d.id })}
          />
        ))}
      </MapView>

      <TouchableOpacity style={[styles.primaryBtn, { position: 'absolute', bottom: 24, alignSelf: 'center', width: '90%' }]} onPress={() => navigation.navigate('Explore')}>
        <Text style={styles.primaryBtnText}>Tilbage til liste</Text>
      </TouchableOpacity>
    </View>
  );
}