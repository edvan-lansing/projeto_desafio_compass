const fetchBitcoin = fetch('https://www.mercadobitcoin.net/api/BTC/ticker/')
  .then((response) => {
    return response.json()
  })
  .then((bitcoin) => {
    document.querySelector('#bit')
    console.log(bitcoin)
  })

console.log(fetchBitcoin)
