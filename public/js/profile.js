// js for search goes here profile.handlebars
const carDataSearchHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    var make = document.querySelector('#carMake').value.trim();
    var year = document.querySelector('#carYear option:checked').value.trim();
    var carList = document.getElementById('carList');
    var kbbUrl = document.getElementById('savedCar');
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '495e45f322msh4fca825b3c3afa3p19ec03jsnd3b134bddfbd',
            'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        }
    };

    let carApi = 'https://car-data.p.rapidapi.com/cars?limit=50&page=0';

    if (make && make != '') {
        carApi += `&make=${make}`;
    }
    if (year && year != '') {
        carApi += `&year=${year}`
    }
    const response = await fetch(`https://car-data.p.rapidapi.com/cars?limit=15&page=0&year=${year}&make=${make}`, options);
    const json = await response.json();
    for (var i = 0; i < json.length; i++) {
        let carWrapper = document.createElement('div');
        carWrapper.className = "car-item";
        carWrapper.style.cssText = 'border-radius: 25px;border: 2px solid black;padding: 20px;margin-bottom: 20px;width: fit-content;background-color: #D9D9D9;box-shadow: 10px 5px 5px #353535;';

        let carMake = document.createElement('h1');
        let carYear = document.createElement('h2');
        let carModel = document.createElement('h2');
        let btn = document.createElement("BUTTON");
        btn.setAttribute('id', 'save-button');
        btn.setAttribute('data-make', json[i].make)
        btn.setAttribute('data-model', json[i].model)
        btn.setAttribute('data-year', json[i].year)

        
        carMake.textContent = json[i].make;
        carYear.textContent = json[i].year;
        carModel.textContent = json[i].model;
        btn.textContent = "save car"

        carWrapper.append(carMake);
        carWrapper.append(carYear);
        carWrapper.append(carModel);
        carWrapper.append(btn);

        carList.append(carWrapper);
        
        btn.addEventListener('click', addSavedSearch);
    }
};
async function addSavedSearch(event) {
    event.preventDefault();

    const make = event.target.dataset.make
    const model = event.target.dataset.model
    const year = event.target.dataset.year

        if(make && model && year) {
        const savedData = await fetch('/api/car', {
            method: 'POST',
            body: JSON.stringify({ make, model, year }),
            headers: { 'Content-Type': 'application/json' },
    });
    if (savedData.ok) {
        document.location.replace('/saved');
        console.log(savedData);
    } else {
        alert(`This vehicle is already saved`);
    }
}
};

document
    .querySelector('.search-form')
    .addEventListener('submit', carDataSearchHandler);


    
    