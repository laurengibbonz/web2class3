let output = '';

const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'cats.json', true);
console.log(xhttp);
xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        //console.log(this.responseText);
        let data = this.responseText;
        data = JSON.parse(data);
        console.log(data);
        data.forEach(function(elem, index) {
            output += `<p>${elem.name}<br>${elem.age}<br>${elem.breed}</p>`;
        });
        document.querySelector('#demo').innerHTML = output;
    }
}

xhttp.send();
console.log(xhttp);