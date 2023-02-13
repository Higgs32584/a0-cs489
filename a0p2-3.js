const axios = require('axios');
const api_key = '5RS4GI778U5U174VWWCB4GVQM2BIKFJWTJ';
const apiEndpoint2=`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${api_key}`;
axios.get(apiEndpoint2)
  .then(response => {
    ethPrice=response.data['result']['ethusd'];
    ethPricebtc=response.data['result']['ethbtc'];
    console.log(ethPrice);
    console.log(ethPricebtc);
  })
  .catch(error => {
    console.log(error);
  });