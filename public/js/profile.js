// js for search goes here profile.handlebars
const carDataSearchHandler = async (event) => {
    event.preventDefault();
    console.log("searching for cars...");
    // Collect values from the login form
    var make = document.querySelector('#carMake option:checked').value.trim();
    var year = document.querySelector('#carYear option:checked').value.trim();
    var carList = document.getElementById('carList');
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '495e45f322msh4fca825b3c3afa3p19ec03jsnd3b134bddfbd',
            'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        }
    };
    const response = await fetch(`https://car-data.p.rapidapi.com/cars?limit=15&page=0&year=${year}&make=${make}`, options);
    const json = await response.json();
            for (var i = 0; i < json.length; i++) {
            console.log('this is data', json);
            // var carMake = json[i].make;
            // var carYear = json[i].year;
            // var carModel = json[i]
        
            let carMake = document.createElement('h3');
            let carYear = document.createElement('h3');
            let carModel = document.createElement('h3');
            
            carMake.textContent = json[i].make;
            carYear.textContent = json[i].year;
            carModel.textContent = json[i].model;
            
            carList.append(carMake);
            carList.append(carYear);
            carList.append(carModel);
        }
};

document
    .querySelector('.search-form')
    .addEventListener('submit', carDataSearchHandler);
