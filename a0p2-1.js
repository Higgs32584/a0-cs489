// How much ETH did Marlon Humphrey (MarlonHumphrey.eth) from the
// Baltimore Ravens pay for Bored Ape #1880?
const axios = require('axios');
const tx_hash='0x192336f603b8e7bef43518108c39b8fb933c8eee60c0e242655138c8206259ef';
const api_key='5RS4GI778U5U174VWWCB4GVQM2BIKFJWTJ';
const request=`https://api.etherscan.io/api?module=account&action=txlistinternal&txhash=${tx_hash}&sort=asc&apikey=${api_key}`

axios.get(request)
  .then(response => {
    bob=parseInt(response.data['result'][0]['value'])+parseInt(response.data['result'][1]['value']);
    console.log("Amount Marlon Humphrey Paid(Two requests):");
    console.log(bob/Math.pow(10,18));
  })
  .catch(error => {
    console.log(error);
  });