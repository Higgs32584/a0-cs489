const axios = require('axios');
const tx_hash='0xbfe65cc2a2d3b6109ae5665c5d38c74c1035719506c60275390983a38f460b8b';
const api_key='5RS4GI778U5U174VWWCB4GVQM2BIKFJWTJ';
const request=`https://api.etherscan.io/api?module=account&action=txlistinternal&txhash=${tx_hash}&sort=asc&apikey=${api_key}`

axios.get(request)
  .then(response => {
    bob=parseInt(response.data['result'][0]['value'])+parseInt(response.data['result'][1]['value']);
    console.log("Amount Paid");
    console.log(bob/Math.pow(10,18));
  })
  .catch(error => {
    console.log(error);
  });