const DEFAULT_CITY = `Paris`;

const CITY_NAMES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

const DEFAULT_USER = {
  avatarUrl: ``,
  email: ``,
  id: 0,
  isPro: false,
  name: ``,
};

const DEFAULT_OFFER = {
  bedrooms: 0,
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0
    },
    name: ``
  },
  description: ``,
  goods: [],
  host: {
    avatarUrl: ``,
    id: 0,
    isPro: false,
    name: ``
  },
  id: 0,
  images: [],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0
  },
  maxAdults: 0,
  previewImage: ``,
  price: 0,
  rating: 0,
  title: ``,
  type: ``
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const AppRoute = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOT: `/`,
  OFFER: `/offer`,
};

const APIRoute = {
  OFFERS: `/hotels`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  NEARBY: `/nearby`,
  FAVORITE: `/favorite`,
  REVIEWS: `/comments`
};

export {
  DEFAULT_CITY,
  CITY_NAMES,
  SortType,
  DEFAULT_USER,
  DEFAULT_OFFER,
  AuthorizationStatus,
  AppRoute,
  APIRoute,
};
