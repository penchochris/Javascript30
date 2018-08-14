const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions')

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

const findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
};

const highlightWords = (word, value) => {
    const regex = new RegExp(value, 'gi');
    return word.replace(regex, `<span class='hl'>${value}</span>`);   
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const highlightedCity = highlightWords(place.city, this.value);
        const highlightedState = highlightWords(place.state, this.value);
        
        return `
            <li>
                <span class="name">${highlightedCity}, ${highlightedState}</span>
                <span class="population">${place.population}</span>
            </li>
        `;
    }).join('');
    
    suggestions.innerHTML = html;
};

searchInput.addEventListener('input', displayMatches);