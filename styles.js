import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  h1: {
    fontSize: 24,
    fontWeight: '700',
    padding: 16,
  },
  body: {
    fontSize: 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  card: {
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#fafafa',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardMeta: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
  },
  primaryBtn: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#111827',
  },
  primaryBtnText: {
    color: '#fff',
    fontWeight: '700',
  },
  secondaryBtn: {
    margin: 16,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#e5e7eb',
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  secondaryBtnText: {
    fontWeight: '700',
  },
});    