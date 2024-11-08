const currency1=getElementbyId('currency1');
function fetchData(){
  fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then((data) => {
    data.json().then((res) => {
      
      console.log(currency1.input.value);
      console.log(res.rates);
    })
    
  })
}
fetchData();