const fetchShiba = fetch('https://www.mercadobitcoin.net/api/SHIB/ticker/')
  .then((response) => {
    return response.json()
  })
  .then((Shiba) => {
    document.querySelector('Shiba')
    console.log(Shiba)
  })

console.log(fetchShiba)
