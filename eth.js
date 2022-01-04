const fetchEthereum = fetch('https://www.mercadobitcoin.net/api/Eth/ticker/')
  .then((response) => {
    return response.json()
  })
  .then((Ethereum) => {
    document.querySelector('Ethereum')
    console.log(Ethereum)
  })

console.log(fetchEthereum)
