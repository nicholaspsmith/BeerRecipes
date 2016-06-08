export function selectBeer(beer) {
  return {
    type: 'BEER_SELECTED',
    payload: beer
  }
}