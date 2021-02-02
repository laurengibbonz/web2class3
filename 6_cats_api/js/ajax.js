$(document).ready(function(){

//Sign up for an account at https://thecatapi.com/ to get your API Key and insert below
const key = 'API-KEY';
let headers = new Headers();
headers.set('x-api-key', key);

//how many cat images do you want to pull in
const limit = '12';
const url = 'https://api.thecatapi.com/v1/images/search?limit=' + limit;

//getJSON
$.getJSON(url, function(data){
	//loop through the returned cat images using either for or $.each()

	//append the returned cat images to the #content div
 	console.log(data);
});


});