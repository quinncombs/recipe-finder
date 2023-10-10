
var requestUrl1 = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=93a876d3cf6c4df383a62179f5d3cd18";
var requestUrl2 = "https://www.themealdb.com/api/json/v1/1/random.php";


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

getApi(requestUrl1);
getApi(requestUrl2);


searchBtn.addEventListener("click", getRecipe);
// mealButton.addEventListener("click", getRecipe);

function getSource(id) {
  $.ajax({
url: "http://api.spoonacular.com/recipes/" +id+ "/information?apiKey=93a876d3cf6c4df383a62179f5d3cd18",
success: function(res) {
  document.getElementById("sourceLink").innerHTML=res.resourceUrl;
  document.getElementById("sourceLink").href=res.sourceUrl;
}
  })
}


// const getRecipe = async () => {
//   try {
//     diet === 'none' ? (diet = '') : null; // Remove diet if 'none' is selected
//     setLoading(true);
//     const res = await axios.get('api/search/', {
//       params: {keyword, diet, exclude} // Sending parameters to our API
//     });
//     const {data} = res; // Object destructuring to extract data from our response
//     setResponse(data.results); // Store results in the response state
//   } catch (error) {
//     console.error(error);
//   }
// };
import {useState} from 'react';
const [response, setResponse] = useState(null); // Stores the response from the API

function getRecipe(q) {
  $.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=93a876d3cf6c4df383a62179f5d3cd18&number=3&query="+q,
    success: function(res){
      // document.getElementById("output").innerHTML="<h1>"
      +res.results.title+"</h1><br><img src='"
      +res.results.image+"' width='400'/> <br> ready in "
      +res.results.readyInMinutes+" minutes."
      setResponse(data.results); // Store results in the response state
      getSource(id)
    }
  })
}


const results = [
  {
    id: 492560,
    title: "Quick and Easy St. Louis-Style Pizza",
    readyInMinutes: 27,
    sourceUrl: "https://www.cinnamonspiceandeverythingnice.com/st-louis-style-pizza/",
    image: "St--Louis-Style-Pizza-492560.jpg"
  }
]



const mealButton = document.getElementById('get_meal');

mealButton.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
		createMeal(res.meals[0]);
	});
});

const createMeal = (meal) => {
	const ingredients = [];
	// Get all ingredients from the object. Up to 20
	for(let i=1; i<=20; i++) {
		if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			// Stop if no more ingredients
			break;
		}
  }
}

{

function createMeal(meal) {
 
    const foodRecipes = document.getElementById("food-recipes");

    foodRecipes.innerHTML = "";

    const mealList = document.createElement("ul");

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        } else {
            break;
        }
    }

    mealList.innerHTML = `
        <li>Name: ${meal.strMeal}</li>
        <li>Category: ${meal.strCategory}</li>
        <li>Area: ${meal.strArea}</li>
        <li>Ingredients: ${ingredients.join(", ")}</li>
        <li>Instructions: ${meal.strInstructions}</li>
    `;

    foodRecipes.appendChild(mealList);

    foodRecipes.classList.remove("hide");
}

const mealButton = document.getElementById("mealButton");

mealButton.addEventListener("click", () => {
    fetch(mealApiUrl)
        .then((res) => res.json())
        .then((res) => {
            createMeal(res.meals[0]);
        });
});
}