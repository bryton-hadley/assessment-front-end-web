const FavColorBtn = document.querySelector('#color')
const favPlaceBtn = document.querySelector('#place')
const favRitualBtn = document.querySelector('#ritual')



const favColor = (event) => {
    event.preventDefault();

    let color = 'Purple'

    color.textContent = color
}

document.getElementById('color').addEventListener('click', favColor)