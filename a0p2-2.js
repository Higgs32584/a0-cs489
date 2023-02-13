// How much ETH did Trey Songz (TreySongz.eth) transfer to the wallet
// address 0x5e0b733905CC54989Ec7c28A07c516e51c5Afedf
const axios = require('axios');
const address='0x5e0b733905CC54989Ec7c28A07c516e51c5Afedf';
const api_key='5RS4GI778U5U174VWWCB4GVQM2BIKFJWTJ';
const request=`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${api_key}`
const txhash='0x941bc36723200c0fbc5199f52f45340ce8bdcb645bf83f6241917d9644b5b06b';
axios.get(request)
  .then(response => {
    result=response.data['result'];
    for(var i=0; i<result.length; i++){
        if(result[i]['hash']== txhash){
            console.log(parseInt(result[i]['value'])/Math.pow(10,18));
        }
    }
  })
  .catch(error => {
    console.log(error);
  });
