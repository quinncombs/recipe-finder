
var requestUrl1 = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=dae467e74d86479185a765f974762627";
var requestUrl2 = "https://www.themealdb.com/api/json/v1/1/random.php";
var requestUrl3 = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"


function getApi(requestUrlArg) {
  fetch(requestUrlArg, {
    headers: {

    }
  })
  
  .then(async function (response) {
    console.log(response);
   
    let asyncResponse= await response.json()
    return asyncResponse
  })
  
  .then(function(data){
    console.log(data);
  })
}

getApi(requestUrl2);
getApi(requestUrl3);
getApi(requestUrl1);

// fetch ("https://api.spoonacular.com/recipes/findByIngredients?apiKey=dae467e74d86479185a765f974762627", {

// method: "GET",
// headers:{

//     "Content-Type": "application/json"
// }
// })