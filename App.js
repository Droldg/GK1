import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreScreen from './screens/ExploreScreen';
import DealScreen from './screens/DealScreen';
import ReservationsScreen from './screens/ReservationsScreen';
import MapScreen from './screens/MapScreen';
import { ReservationsProvider } from './store/reservations';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ReservationsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Explore" component={ExploreScreen} options={{ title: 'FirmaFood' }} />
          <Stack.Screen name="Deal" component={DealScreen} options={{ title: 'Tilbud' }} />
          <Stack.Screen name="Reservations" component={ReservationsScreen} options={{ title: 'Mine reservationer' }} />
          <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Kort' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReservationsProvider>
  );
}