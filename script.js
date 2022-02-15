// Samuel
// February 14th
// CSE 121B

const API_KEY = "GDZentbpNcSHqYgl2HmVG6qPnfVLJ2ESuUnbC4Db";
const FOOD_URL = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=";

const PROTEIN_INDEX = 0;
const FAT_INDEX = 1;
const CARB_INDEX = 2;
const CALORIE_INDEX = 3;

const STAT_IDS = ["mango-data", "peach-data", "banana-data", "apple-data"];

const PARAMS = {

"mango" :  {
    api_key : API_KEY,
    query : 'mango',
    dataType: ["Survey (FNDDS)"]

    },

"banana" : {
    api_key : API_KEY,
    query : 'banana',
    dataType: ["Survey (FNDDS)"]
    },

"apple" : {
    api_key : API_KEY,
    query : 'apple',
    dataType: ["Survey (FNDDS)"]
    },

"peach" : {
    api_key : API_KEY,
    query : 'peach',
    dataType: ["Survey (FNDDS)"]
    }
};

    
let updateHTML = () => { // Main function

        let reset = (parentId) => {
            let parent = document.getElementById(parentId);
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild)
            }
        };
    
        let fetchData = (URL, fruit) => {
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                insertData(data.foods[0].foodNutrients[index].value, fruit)
        })
        };

        let insertData = (data, fruit) => {
            let parent = document.getElementById(`${fruit}-data`)
            let child = document.createElement("p")
            console.log(`ready to put in ${data} for ${fruit}!`)
            if (stat === "Calories") {
                unit = "kcal";
            }
            else {
                unit = "grams"
            }
            child.innerText = stat + ': ' + data + ' ' + unit;
            parent.appendChild(child)
    
        }
        
        
        STAT_IDS.map(reset) // Step 1: Reset stats
    
        stat = dropDown.value
        
        switch (stat) {
            case "Carbs":
                index = CARB_INDEX;
                break;
            case "Protein":
                index = PROTEIN_INDEX;
                break;
    
            case "Fats":
                index = FAT_INDEX;
                break;
    
            case "Calories":
                index = CALORIE_INDEX;
                break;
    
            default:
                console.log("Value not identified!")
        }

        for (fruit in PARAMS) { // Iterate through each key
            console.log(fruit)
            let adapted_url = `${FOOD_URL}${PARAMS[fruit].api_key}&query=${PARAMS[fruit].query}&dataType=${encodeURIComponent(PARAMS[fruit].dataType)}&pageSize=1`;
    
            fetchData(adapted_url, fruit)
    
    }

    };


let dropDown = document.querySelector("#dropdown-select");
dropDown.addEventListener('change', updateHTML)

