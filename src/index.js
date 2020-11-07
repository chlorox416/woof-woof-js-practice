//addEventListener - DOMContentLoaded
//Defer the script tag in index.html
//Move script tag to the body and cut from the head 
const dogUrl = 'http://localhost:3000/pups/'
const dogBar = document.getElementById('dog-bar')

const getDogs = () => {
    fetch(dogUrl)
    .then(resp => resp.json())
    .then(dogsArray => renderDogs(dogsArray))
}

const renderDogs = (dogsArray) => {
    dogsArray.forEach(dog => {
        appendDog(dog)
    })
}

const appendDog = (dog) => {
const dogSpan = document.createElement('span')
dogSpan.dataset.id = dog.id
dogSpan.innerHTML = `
    ${dog.name}
`
dogBar.append(dogSpan)


//Add an event listener - click
//Populating (POST?) info elsewhere

dogSpan.addEventListener('click', event => {
    dogDetail(event.target.dataset.id)
})

function dogDetail(id){
    fetch(dogUrl + id)
    .then(resp => resp.json())
    .then(addDogToContainer)
}

const addDogToContainer = (dog) => {
const dogInfo = document.getElementById('dog-info')
//could put on top make global if wanted to
const pupName = document.createElement('h2')
pupName.innerHTML = dog.name
const pupImg = document.createElement('img')
pupImg.src = dog.image
const pupButton = document.createElement('button')
pupButton.innerText = dog.isGoodDog
pupButton.dataset.id = dog.id
// if we do .innerHTML = '
//  <img src=${dog.image}>
// <h2> ${dog.name} </h2>
// <button>${dog.isgooddog}</button>
// '

dogInfo.append(pupName, pupImg, pupButton)

}




}
getDogs();