var vehicleList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '495e45f322msh4fca825b3c3afa3p19ec03jsnd3b134bddfbd',
		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
	}
};
fetch('https://car-data.p.rapidapi.com/cars?limit=10&page=0', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

      for (var i = 0; i < 10; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }


fetchButton.addEventListener('click', getApi);