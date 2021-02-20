class countryCard extends HTMLElement {

    constructor() {
        super();
    }

    pleaseWork() {
        console.log('yes');
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

                    let fragment = new DocumentFragment();
                    let elbox = null;

                    data.slice(difference).forEach((u) => {
                        elbox = document.createElement('div');
                        elbox.innerHTML =
                            `<div class="country shadow-sm" id="${u.name}">` +
                            `<span class="btn-country">` + 'Nombre: ' + u.name + `</span> <br>` +
                            `<span>` + 'Población: ' + u.population + `</span> <br>` +
                            `<span>` + 'Capital: ' + u.capital + `</span> <br>` +
                            `</div>`
                        elbox.onclick = function () {
                            var modalTrigger = document.querySelector('.btn-country');
                            var modalBg = document.querySelector('.modal-bg');
                            var modalClose = document.querySelector('.bg-gone');

                            modalTrigger.addEventListener('click', function () {
                                modalBg.classList.add('bg-active');
                            })

                            modalClose.addEventListener('click', function () {
                                modalBg.classList.remove('bg-active');
                            })

                            let continent = document.getElementById('continent');
                            continent.innerText = u.region;
                        };

                        fragment.appendChild(elbox);
                    });

                    document.getElementById('content-countries').appendChild(fragment);


                }

            })
            .catch(err => console.log(err));
    }


}

window.customElements.define("app-country-card", countryCard);


//var modalTrigger = document.querySelector('.btn-country');
//var modalBg = document.querySelector('.modal-bg');
//var modalClose = document.querySelector('.bg-gone');

//modalTrigger.addEventListener('click', function () {
//    modalBg.classList.add('bg-active');
//})

//modalClose.addEventListener('click', function () {
//    modalBg.classList.remove('bg-active');
//})
