
// Step 1: select element
const favColorBtn = document.querySelector('#color')
const favPlaceBtn = document.querySelector('#place')
const favRitualBtn = document.querySelector('#ritual')


// step 2: write a function
const favColor = () => {
    alert('The Wizards favorit color is Purple')
}

const favPlace = () => {
    alert('The Wizards favorite place is the Mounatians')
}
const favRitual = () => {
    alert('The Wizards favorit ritaul is Casting Spells')
}


// step 3: combine with .addEventListener
favColorBtn.addEventListener('click', favColor)
favPlaceBtn.addEventListener('click', favPlace)
favRitualBtn.addEventListener('click', favRitual)
// document.getElementById('color').addEventListener('click', favColor)