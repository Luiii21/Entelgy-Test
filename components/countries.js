const url = 'https://restcountries.eu/rest/v2/lang/es'

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err));
