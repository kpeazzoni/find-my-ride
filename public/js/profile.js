// js for search goes here profile.handlebars
const carDataSearchHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    var make = document.querySelector('#carMake option:checked').value.trim();
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
    const response = await fetch(`https://car-data.p.rapidapi.com/cars?limit=15&page=0&year=${year}&make=${make}`, options);
    const json = await response.json();
    for (var i = 0; i < json.length; i++) {
        let carWrapper = document.createElement('div');
        carWrapper.className = "car-item";
        carWrapper.style.cssText = 'border-radius: 25px;border: 2px solid black;padding: 20px;margin-bottom: 20px;width:200px;height:200px;';
    
        let carMake = document.createElement('h1');
        let carYear = document.createElement('h2');
        let carModel = document.createElement('h2');
<<<<<<< HEAD

    
    
=======
        let btn = document.createElement("BUTTON"); 
        btn.id ='save-button';

>>>>>>> ddd74aae46cdc5350ee7a20b3a69032153fd6b34
        carMake.textContent = json[i].make;
        carYear.textContent = json[i].year;
        carModel.textContent = json[i].model;
        btn.textContent = "save car"
        
        carWrapper.append(carMake);
        carWrapper.append(carYear);
        carWrapper.append(carModel);
        carWrapper.append(btn);

        carList.append(carWrapper);
}
};
<<<<<<< HEAD




=======
// carDataSearchHandler();
>>>>>>> ddd74aae46cdc5350ee7a20b3a69032153fd6b34
document
    .querySelector('.search-form')
    .addEventListener('submit', carDataSearchHandler);


    // document.getElementById('submit').onclick = function() {
    //     var checkbox = document.createElement('input');
    //         checkbox.type = 'checkbox';
    //         checkbox.id = 'car';
    //         checkbox.name = 'interest';
    //         checkbox.value = 'car';
     
    //     var label = document.createElement('label')
    //     label.htmlFor = 'car';
    //     label.appendChild(document.createTextNode('Car'));
     
    //     var br = document.createElement('br');
     
    //     var container = document.getElementById('container');
    //     container.appendChild(checkbox);
    //     container.appendChild(label);
    //     container.appendChild(br);
    // }
    