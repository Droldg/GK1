//Dummy data til liste og kort 

export const deals = [
  { id: '1', vendor: 'Kantinen - HQ', title: 'Blandede madkasser (2 pers.)', price: 25, originalPrice: 80, pickupWindow: '16:30-17:00 i dag', latitude: 55.6761, longitude: 12.5683 }, // København K
  { id: '2', vendor: 'Fredagsbar · IT-afd.', title: 'Drikkevarepakke (rester)', price: 40, originalPrice: 120, pickupWindow: '18:00-18:30 i dag', latitude: 55.6666, longitude: 12.5541 }, // Vesterbro
  { id: '3', vendor: 'Kantinen - Bygning B', title: 'Salatbokse (3 stk.)', price: 30, originalPrice: 90, pickupWindow: '16:45-17:15 i dag', latitude: 55.6998, longitude: 12.5529 }, // Nørrebro
  { id: '4', vendor: 'HR - Sommerfest', title: 'Tapas-boks (1-2 pers.)', price: 35, originalPrice: 110, pickupWindow: '19:15-19:45 i dag', latitude: 55.6641, longitude: 12.5790 }, // Islands Brygge
  { id: '5', vendor: 'Kantinen - Bygning C', title: 'Varm ret - dagens rester', price: 20, originalPrice: 75, pickupWindow: '16:15-16:45 i dag', latitude: 55.6797, longitude: 12.5346 }, // Frederiksberg
  { id: '6', vendor: 'Marketing - Fredagsbar', title: 'Snacks combo (chips/nødder)', price: 15, originalPrice: 50, pickupWindow: '17:30-18:00 i dag', latitude: 55.6497, longitude: 12.5435 }, // Sydhavnen
  { id: '7', vendor: 'Kantinen - HQ', title: 'Sandwichpakke (2 stk.)', price: 22, originalPrice: 70, pickupWindow: '16:30-17:00 i dag', latitude: 55.7083, longitude: 12.5724 }, // Østerbro
  { id: '8', vendor: 'Kantinen - Bygning A', title: 'Dagens salat (1 stor)', price: 18, originalPrice: 60, pickupWindow: '16:20-16:50 i dag', latitude: 55.6610, longitude: 12.6009 }, // Amagerbro
  { id: '9', vendor: 'Kantinen - HQ', title: 'Sushi mix (8 stk.)', price: 35, originalPrice: 95, pickupWindow: '16:40-17:10 i dag', latitude: 55.7500, longitude: 12.5500 }, // Gentofte
  { id: '10', vendor: 'Finance - Sommerarrangement', title: 'Dessertbakke (kage/frugt)', price: 25, originalPrice: 70, pickupWindow: '19:00-19:30 i dag', latitude: 55.5920, longitude: 12.6710 }, // Dragør
  { id: '11', vendor: 'Kantinen - Bygning D', title: 'Pasta to-go (2 pers.)', price: 28, originalPrice: 85, pickupWindow: '16:30-17:00 i dag', latitude: 55.7333, longitude: 12.4667 }, // Gladsaxe
  { id: '12', vendor: 'Kantinen - HQ', title: 'Morgenbrød (4 stk.)', price: 12, originalPrice: 45, pickupWindow: '08:00-08:30 i morgen', latitude: 55.6299, longitude: 12.5776 }, // Ørestad
  { id: '13', vendor: 'Kantinen - Bygning B', title: 'Yoghurt/chiaparfait (2 stk.)', price: 14, originalPrice: 48, pickupWindow: '08:15-08:45 i morgen', latitude: 55.7703, longitude: 12.5038 }, // Lyngby
  { id: '14', vendor: 'Kantinen - Bygning C', title: 'Grøntsagssuppe (1 L)', price: 20, originalPrice: 65, pickupWindow: '16:10-16:40 i dag', latitude: 55.6806, longitude: 12.4537 }, // Rødovre
  { id: '15', vendor: 'Operations - Afdelingsmøde', title: 'Wraps (3 stk.)', price: 30, originalPrice: 90, pickupWindow: '17:45-18:15 i dag', latitude: 55.6572, longitude: 12.4727 }, // Hvidovre
  { id: '16', vendor: 'Kantinen - HQ', title: 'Varme frikadeller (10 stk.)', price: 26, originalPrice: 75, pickupWindow: '16:35-17:05 i dag', latitude: 55.7145, longitude: 12.4910 }, // Brønshøj
  { id: '17', vendor: 'Kantinen - Bygning A', title: 'Rugbrød + pålægspakke', price: 22, originalPrice: 70, pickupWindow: '16:25-16:55 i dag', latitude: 55.7315, longitude: 12.5700 }, // Hellerup
  { id: '18', vendor: 'Kantinen - Bygning D', title: 'Veggie-boks (2 pers.)', price: 24, originalPrice: 78, pickupWindow: '16:30-17:00 i dag', latitude: 55.6586, longitude: 12.5214 }, // Valby
  { id: '19', vendor: 'Kantinen - HQ', title: 'Oste-/pølsebord (rest)', price: 34, originalPrice: 100, pickupWindow: '17:10-17:40 i dag', latitude: 55.6800, longitude: 12.6000 }, // Christianshavn (approx)
  { id: '20', vendor: 'Kantinen - Bygning B', title: 'Sodavand (6 blandede)', price: 20, originalPrice: 54, pickupWindow: '18:00-18:20 i dag', latitude: 55.7310, longitude: 12.3639 }, // Ballerup
];

// hjælpeobjekt til hurtigt opslag af deals via ID
export const dealsById = Object.fromEntries(deals.map(d => [d.id, d]));