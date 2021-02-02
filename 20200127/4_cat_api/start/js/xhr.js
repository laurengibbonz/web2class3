const key = '',
	limit = '12',
	url = `https://api.thecatapi.com/v1/images/search?limit=${limit}`;


let output = '';

const updateSuccess = function(data) {
	const parsedData = JSON.parse(data);
	console.log(parsedData);
	parsedData.forEach(function(elem, index) {
		// output += elem.url;
		document.querySelector('#content').innerHTML = `<img src="${elem.url}" />`;
	});
	let catURL = parsedData[0].url;
	console.log(catURL);
}

const updateFail = function(error) {
	console.log(data);
	
}

const responseMethod = function(httpRequest) {
	if(httpRequest.readyState == 4) {
		if(httpRequest.status == 200) {
			updateSuccess(httpRequest.responseText);
		} else {
			updateFail(httpRequest.status + httpRequest.responseText);
		}
	}
}

const createRequest = function(url) {
	const httpRequest = new XMLHttpRequest(url);
	httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest));
	httpRequest.open("GET", url, true);
	httpRequest.send();
};
createRequest(url);



// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
// 	if (this.readyState == 4 && this.status == 200) {
// 	document.getElementById("demo").innerHTML = this.responseText;
// 	}
// };
// xhttp.open("GET", url, true);
// xhttp.send();