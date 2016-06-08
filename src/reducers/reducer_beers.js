export default function() {
  return [
    { 
      name: 'Summer IPA',
      id: 'beer1',
      ingredients: [
        { 
          name: 'Pilsner',
          amount: {
            number: 5.4,
            units: 'kg'
          }
        },
        { 
          name: 'Munich Malt',
          amount: {
            number: .17,
            units: 'kg'
          }
        },
        { 
          name: 'Vienna Malt',
          amount: {
            number: .17,
            units: 'kg'
          }
        },
        { 
          name: 'Light Dry Extract',
          amount: {
            number: .5,
            units: 'kg'
          }
        },
        { 
          name: 'Columbus (Tomahawk)',
          amount: {
            number: 20,
            units: 'g'
          }
        },
        { 
          name: 'Irish Moss',
          amount: {
            number: .26,
            units: 'tsp'
          }
        },
        { 
          name: 'Citra',
          amount: {
            number: 30,
            units: 'g'
          }
        },
        { 
          name: 'Mosaic',
          amount: {
            number: 30,
            units: 'g'
          }
        }
      ]
    },

    { 
      name: 'Bon Bon Kolsch',
      id: 'beer2',
      ingredients: [
        { 
          name: 'Pilsner malt',
          amount: {
            number: 17,
            units: 'lb'
          }
        },
        { 
          name: 'Wheat Malt',
          amount: {
            number: 3,
            units: 'lb'
          }
        },
        { 
          name: 'Crystal Malt',
          amount: {
            number: 1,
            units: 'lb'
          }
        }
      ]
    },

    {
      name: 'Cacoal Ale Brown (English)',
      id: 'beer3',
      ingredients: [
        {
          name: 'Pilsen Malt',
          amount: {
            number: 48.1,
            units: '%'
          }
        },
        {
          name: 'Pale Ale Malt',
          amount: {
            number: 21.4,
            units: '%'
          }
        },
        {
          name: 'Pale Ale Maris Otter Malt',
          amount: {
            number: 21.3,
            units: '%'
          }
        },
        {
          name: 'Carafa III Malt',
          amount: {
            number: 6.2,
            units: '%'
          }
        },
        {
          name: 'Chocolate Light Malt',
          amount: {
            number: 3,
            units: '%'
          }
        }
      ]
    }
  ]
}