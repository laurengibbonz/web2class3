$(document).ready(function(){

//Sign up for an account at https://thecatapi.com/ to get your API Key and insert below
const key = 'Bearer V-Mn9Hq7ff11-eH4dNbL';
let headers = new Headers();
headers.set('Authorization', key);

//how many cat images do you want to pull in
const limit = '12';
const url = 'https://the-one-api.herokuapp.com/v1/chapter';

//getJSON
$.getJSON(url, function(data){
	//loop through the returned cat images using either for or $.each()

	//append the returned cat images to the #content div
 	console.log(data);
});


});