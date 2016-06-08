export default function() {
  return [
    { 
      name: 'Summer IPA',
      id: 'beer1',
      ingredients: [
        { 
          ingredientName: 'Pilsner',
          amount: {
            number: 5.4,
            units: 'kg'
          }
        },
        { 
          ingredientName: 'Munich Malt',
          amount: {
            number: .17,
            units: 'kg'
          }
        },
        { 
          ingredientName: 'Vienna Malt',
          amount: {
            number: .17,
            units: 'kg'
          }
        },
        { 
          ingredientName: 'Light Dry Extract',
          amount: {
            number: .5,
            units: 'kg'
          }
        },
        { 
          ingredientName: 'Columbus (Tomahawk)',
          amount: {
            number: 20,
            units: 'g'
          }
        },
        { 
          ingredientName: 'Irish Moss',
          amount: {
            number: .26,
            units: 'tsp'
          }
        },
        { 
          ingredientName: 'Citra',
          amount: {
            number: 30,
            units: 'g'
          }
        },
        { 
          ingredientName: 'Mosaic',
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
          ingredientName: 'Pilsner malt',
          amount: {
            number: 17,
            units: 'lb'
          }
        },
        { 
          ingredientName: 'Wheat Malt',
          amount: {
            number: 3,
            units: 'lb'
          }
        },
        { 
          ingredientName: 'Crystal Malt',
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
          ingredientName: 'Pilsen Malt',
          amount: {
            number: 48.1,
            units: '%'
          }
        },
        {
          ingredientName: 'Pale Ale Malt',
          amount: {
            number: 21.4,
            units: '%'
          }
        },
        {
          ingredientName: 'Pale Ale Maris Otter Malt',
          amount: {
            number: 21.3,
            units: '%'
          }
        },
        {
          ingredientName: 'Carafa III Malt',
          amount: {
            number: 6.2,
            units: '%'
          }
        },
        {
          ingredientName: 'Chocolate Light Malt',
          amount: {
            number: 3,
            units: '%'
          }
        }
      ]
    }
  ]
}