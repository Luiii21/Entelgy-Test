class countryCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<div class="content-countries" id="content-countries"></div>`;
        const url = 'https://restcountries.eu/rest/v2/lang/es'

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    let box = '';
                    let difference = 0;
                    if (data.length > 12) {
                        difference = data.length - 12
                    }
                    data.slice(difference).forEach((u) => {
                        box += `<div class="country shadow-sm">`
                        box += `<div><span>` + "Nombre: " + u.name + `</span> <br>`
                        box += `<span>` + "Población: " + u.population + `</span> <br>`
                        box += `<span>` + "Capital: " + u.capital + `</span></div>`
                        box += `</div>`
                    })
                    let element = document.getElementById('content-countries')
                    element.innerHTML = box;
                }

            })
            .catch(err => console.log(err));
    }
}

window.customElements.define("app-country-card", countryCard);


