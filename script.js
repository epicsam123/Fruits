// Samuel Casellas 
// February 14th
// CSE 121B

const API_KEY = "GDZentbpNcSHqYgl2HmVG6qPnfVLJ2ESuUnbC4Db";
const FOOD_URL = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=";

const PROTEIN_INDEX = 0;
const FAT_INDEX = 1;
const CARB_INDEX = 2;
const CALORIE_INDEX = 3;

const PARAMS = {

mango :  {
    api_key : API_KEY,
    query : 'mango',
    dataType: ["Survey (FNDDS)"]

    },

banana : {
    api_key : API_KEY,
    query : 'banana',
    dataType: ["Survey (FNDDS)"]
    },

apple : {
    api_key : API_KEY,
    query : 'apple',
    dataType: ["Survey (FNDDS)"]
    },

peach : {
    api_key : API_KEY,
    query : 'peach',
    dataType: ["Survey (FNDDS)"]
    }
};

const createQueryObject = () => { 
    queryObject = new Object;
    
    for (fruit in PARAMS) { // Iterate through each key

    let adapted_url = `${FOOD_URL}${PARAMS[fruit].api_key}&query=${PARAMS[fruit].query}&dataType=${encodeURIComponent(PARAMS[fruit].dataType)}&pageSize=1`;
    console.log(adapted_url)

    fetch(adapted_url)
    .then((response) => response.json())

        /*
        if (response.ok) {
            return response.json();
            }
        else {
            console.log("An error has occured.")
        }
        */
    .then((data) => {queryObject[fruit] = data})
}

    return queryObject; // Return an object with food names as keys and their respective json responses as values
};

const resetParent = function(parent) {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
};

let updateHTML = function(object, stat) {
    console.log(object)
    console.log(Object.keys(object).length)
    //console.log(object.foods)//.foodNutrients[0].value)
}


let dropDown = document.querySelector("#dropdown-select");
let ourFoodObject = createQueryObject();

updateHTML(ourFoodObject, 0)


//dropDown.addEventListener('select', )

