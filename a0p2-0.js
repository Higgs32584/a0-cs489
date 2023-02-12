const axios = require('axios');
const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';
const api_key = '5RS4GI778U5U174VWWCB4GVQM2BIKFJWTJ';
const apiEndpoint = 'https://api.etherscan.io/api?module=account&action=balance&address=0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045&tag=latest&apikey=5RS4GI778U5U174VWWCB4GVQM2BIKFJWTJ';
const apiEndpoint2='https://api.etherscan.io/api?module=stats&action=ethprice&apikey=5RS4GI778U5U174VWWCB4GVQM2BIKFJWTJ'

// Make the API request using axios
ethPrice=0
axios.get(apiEndpoint2)
  .then(response => {
    ethPrice=response.data['result']['ethusd'];
  })
  .catch(error => {
    console.log(error);
  });

axios.get(apiEndpoint)
  .then(response => {
    total_eth=response.data['result']/(Math.pow(10,18));
    console.log(total_eth*ethPrice);
  })
  .catch(error => {
    console.log(error);
  });
console.log("hello");