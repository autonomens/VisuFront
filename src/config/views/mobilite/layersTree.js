export default [{
  group: 'Limites administratives',
  layers: [{
    label: 'Départements',
    initialState: {
      active: false,
    },
    layers: ['terralego-departemental'],
  }, {
    label: 'Intercommunalités',
    initialState: {
      active: false,
    },
    layers: ['terralego-intercommunal'],
  }, {
    label: 'Communes',
    initialState: {
      active: false,
    },
    layers: ['terralego-communal'],
  }],
}, {
  group: 'Navette Domicile - Travail',
  layers: [{
    label: 'Transport en commun',
    layers: ['terralego-transports'],
    legends: [{
      title: 'Part des actifs se déplaçant en transport en commun (en %)',
      items: [{
        label: 'Supérieur ou égal à 14.1%',
        color: '#BC205D',
      }, {
        label: 'De 9.2 à 14.1%',
        color: '#D4495A',
      }, {
        label: 'De 7.0 à 9.2%',
        color: '#E8705D',
      }, {
        label: 'De 4.5 à 7.0%',
        color: '#F79465',
      }, {
        label: 'De 2.7 à 4.5%',
        color: '#F9AF79',
      }, {
        label: 'De 1.2 à 2.7%',
        color: '#F7C99E',
      }, {
        label: 'Inférieur à 1.2%',
        color: '#EFE3CF',
      }],
    }],
  }],
}];
