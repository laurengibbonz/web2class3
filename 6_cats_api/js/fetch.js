const key = '',
	limit = '12',
	url = `https://api.thecatapi.com/v1/images/search?limit=${limit}`;

const urlInit = {
	headers: {
		'Content-Type': 'application/json',
		'x-api-key': 'a29d4998-73b2-476d-9f07-defd0544afae',
	},
};
let output = '',
	count = 0;

const handleErrors = function(response) {
	if(!response.ok) {
	  throw (response.status + ': ' + response.statusText);
	}
	return response.json();
  }

const updateSuccess = function(parsedData) {
	// const parsedData = JSON.parse(data);
	console.log(parsedData);

	parsedData.forEach(function(elem, index) {
		count++;
		output += `<img src="${elem.url}" />`;
		if(count = parsedData.length) {
			updateContent(output);
		}
	});
	let catURL = parsedData[0].url;
	console.log(catURL);
}

const updateContent = function(output){
	console.log(output);
	document.querySelector('#content').innerHTML = `${output}`;
}

const updateFail = function(error) {
	console.log(data);
	
}

const createRequest = function(url, succeed, fail, init) {
	fetch(url,init)
		//fetch returns the response not json
		//no {} means return it
		// .then((response) => response.json())
		.then((response) => handleErrors(response))
		.then((data) => succeed(data))
		.catch((error) => fail(error));
};
window.addEventListener('DOMContentLoaded', () => {
	createRequest(url, updateSuccess, updateFail, urlInit);
  })