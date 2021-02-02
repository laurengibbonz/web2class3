const key = '98030b0214d647fb76764fd4e981ebfa',
	unit = 'imperial',
	dayCount = 5,
	lat = '40.714272',
	lon = '-74.005966',
	url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`;

let output = '',
	count = 0;

//Issue
function weatherDay(index) {
	let d = new Date();
	let tomorrow = d.getDay() + 1;
	let weatherD = tomorrow + (index % 7);	
	let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	if(weatherD >= weekday.length) {
		weatherD = 0;
	}	
	return weekday[weatherD];
}

function handleErrors(response) {
	if(!response.ok) {
		throw new Error((response.status + ': ' + response.statusText));
	}
	return response.json();
}
	
function updateSuccess(data){
	console.log(data);
	document.querySelector('#temp').innerHTML = data.current.temp;
	document.querySelector('#weather').innerHTML = data.current.weather[0].main;

	data.daily.forEach(function(elem, index) {
		console.log(elem.temp.day);
		if(index < 5) {
			output += `<li>${weatherDay(index)} ${elem.temp.day}</li>`;
		}
	});

	console.log(output);

	document.querySelector('#forecast').innerHTML = output;
}

function updateCitySuccess(data){
	console.log(data);

}

function updateFail(error) {
	console.log(error);
	
}

function createRequest(url, succeed, fail) {
	//fetch returns the response not json
	//no {} means return it
	// .then((response) => response.json())
	fetch(url)
	.then((response) => handleErrors(response))
	.then((data) => succeed(data))
	.catch((error) => fail(error));
};

window.addEventListener('DOMContentLoaded', () => {
	createRequest(url, updateSuccess, updateFail);
});

// Alt Fetch
//   fetch('./api/some.json')
//  .then(
//    function(response) {
//      if (response.status !== 200) {
//        console.log(response.status);
//        return;
//      }
//      response.json().then(function(data) {
//        console.log(data);
//      });
//    })
//  .catch(function(err) {
//    console.log(err);
//  });
