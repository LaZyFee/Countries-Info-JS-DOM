const countryData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countryContainer = document.getElementById('country-contaienr');
    countries.forEach(country => {
        const countriesDiv = document.createElement('div');
        countriesDiv.classList.add('country')
        countriesDiv.innerHTML = `
    <h3>Country name :${country.name.common} </h3>
    <h5>Capital:${country.capital ? country.capital[0] : 'no capital found'} </h5>
    <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
    `
        countryContainer.appendChild(countriesDiv);
    });
}

const loadCountryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    const countryDetail = document.getElementById('country-details');
    countryDetail.innerHTML = `
    <h2>Name: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `

}
countryData();