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
};

export {
  DEFAULT_CITY,
  CITY_NAMES,
  SortType,
  DEFAULT_USER,
  AuthorizationStatus,
  AppRoute,
  APIRoute,
};
