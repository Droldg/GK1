import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@reservations_v1';

const ReservationsContext = createContext({
  reservations: [],
  addReservation: () => {},
  clearReservations: () => {},
});

export function ReservationsProvider({ children }) {
  const [reservations, setReservations] = useState([]);

  // Load fra storage
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) setReservations(JSON.parse(raw));
      } catch (e) {
        console.warn('Kunne ikke loade reservationer', e);
      }
    })();
  }, []);

  // Gem ved ændringer
  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
      } catch (e) {
        console.warn('Kunne ikke gemme reservationer', e);
      }
    })();
  }, [reservations]);

  const addReservation = (deal) => {
    setReservations((prev) => [
      ...prev,
      { ...deal, reservedAt: new Date().toISOString() },
    ]);
  };

  const clearReservations = () => setReservations([]);

  return (
    <ReservationsContext.Provider value={{ reservations, addReservation, clearReservations }}>
      {children}
    </ReservationsContext.Provider>
  );
}

export function useReservations() {
  return useContext(ReservationsContext);
}