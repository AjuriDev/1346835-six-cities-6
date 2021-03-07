const AVATAR_URL = `https://i.pravatar.cc/128`;

export default [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4.8,
    reviews: [
      {
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        date: `2019-05-08T14:13:56.569Z`,
        id: 1,
        rating: 4,
        user: {
          avatarUrl: `img/avatar-max.jpg`,
          id: 5,
          isPro: false,
          name: `Max`
        }
      }
    ],
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      name: `Bob`
    },
    id: 2,
    images: [`img/apartment-02.jpg`, `img/apartment-03.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `img/apartment-02.jpg`,
    price: 80,
    rating: 4.0,
    title: `Wood and stone place`,
    type: `Private room`
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: `Peter`
    },
    id: 3,
    images: [`img/apartment-03.jpg`, `img/room.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 3,
    previewImage: `img/apartment-03.jpg`,
    price: 132,
    rating: 4.5,
    title: `Canal View Prinsengracht`,
    type: `apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Cologne`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: `Rosie`
    },
    id: 4,
    images: [`img/room.jpg`, `img/apartment-01.jpg`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 72.35514938496378,
      longitude: 24.673877537499948,
      zoom: 5
    },
    maxAdults: 6,
    previewImage: `img/room.jpg`,
    price: 180,
    rating: 5.0,
    title: `Nice, cozy, warm big bed apartment`,
    type: `apartment`
  },
];