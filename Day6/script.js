var cities = [];



async function  findMatches (wordToMatch) {
    response = await fetch('https://api.api-ninjas.com/v1/city?name=' + wordToMatch + "&&limit=10", {
        method: 'get',
        headers: { 'X-Api-Key': 'RhTBYxWm0WCbHfxA+UZYDw==AdBMF93Dg6ZVfrHN' },
        contentType: 'application/json',
    })
    .then(blob => blob.json())
    .then(data => {
        return data;
    } )
    .catch(err => console.log(err));
    return response;
}

async function displayMatch(){
    cities = await findMatches(this.value).then((result) => {
        const html = result.map((place, index) => {
            return`
            <li>
                <span class="name">${place.name}, ${place.country}</span>
                <span class="population">${place.population}</span>
            </li>
            `;
        }).join('');
        suggestions.innerHTML = html;
        // const html = result.map( pleace => {
        //     console.log(pleace)
        //     return`
        //     <li>
        //         <span class="name">${pleace.name}, ${pleace.country}</span>
        //         <span class="population">${place.population}</span>
        //     </li>
        //     `;
            
        // }).join('');
        // suggestions.innerHTML = html;
    })

}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatch);
searchInput.addEventListener('keyup', displayMatch);