// current price BTC,ETH,SOL,ADA
const axios = require('axios');
const current_price= 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,cardano&order=market_cap_desc&per_page=100&page=1&sparkline=false'
axios.get(current_price)
  .then(response => {
    for(var i = 0; i < response.data.length; i++) {
    console.log(response.data[i]['name'],":",response.data[i]['current_price']);
    }
  })
  .catch(error => {
    console.log(error);
  });

// BTC on March 1, 2020 @ 12am EST,March 30, 2020 @ 12am EST,May 1, 2017 @ 12am EST,Your birthday in 2022
const dates=['01-03-2020','30-03-2020','01-05-2017','25-08-2022']
  for(let i = 0; i < 4;i++){
  var historical=`https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${dates[i]}&localization=en`
  axios.get(historical)
    .then(response => {
      console.log(dates[i],response.data['market_data']['current_price']['usd']);
    })
    .catch(error => {
      console.log(error);
    });
}