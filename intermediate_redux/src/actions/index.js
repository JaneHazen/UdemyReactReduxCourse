
const url_root = 'http://localhost:3004'
export function getCars(keywords){

  const request = fetch(`${url_root}/carsIndex?q=${keywords}`, {method:'GET'})
  .then( response => response.json())

  return {
    type:'SEARCH_CARS',
    payload:request
  }

}