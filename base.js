const app= document.getElementById('app');

function getDataRickyCharacters() {
    return fetch('https://rickandmortyapi.com/api/character')
        .then(function (response) {
            return response.json();
        })
}

getDataRickyCharacters()
.then(function(data){
    console.log(data)

    data.results.forEach(function(data) {
        const p1 = document.createElement('p');
        let gender=document.createTextNode(getGender(data));

        const p2 = document.createElement('p');
        let name=document.createTextNode(getName(data));

        const p3 = document.createElement('p');
        let species=document.createTextNode(getSpecies(data));

        const p4 = document.createElement('p');
        let status=document.createTextNode(getStatus(data));

        const img = document.createElement('img');
        img.src = getImageUrl(data);
        
        p1.appendChild(gender)
        app.appendChild(p1)
        p2.appendChild(name)
        app.appendChild(p2)
        p3.appendChild(species)
        app.appendChild(p3)
        p4.appendChild(status)
        app.appendChild(p4)
        app.appendChild(img)
    })
})

function getGender(data){
    return data.gender;
}

function getName(data){
    return data.name;
}

function getSpecies(data){
    return data.species;
}

function getStatus(data){
    return data.status;
}

function getImageUrl(data){
    const baseImageUrl = 'https://rickandmortyapi.com/api/character/avatar';

    return `${baseImageUrl}/${data.id}.jpeg`
}