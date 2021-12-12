let plantsCopy = plants.slice();
let defaultArrayOfPlants = plants.slice();


function countOfPlants() {
    let countOfPurchases = 0;

    if ('cart' in localStorage)
        for (let item of Object.values(JSON.parse(localStorage.getItem('cart'))))
            countOfPurchases += item['count'];

    document.getElementById("count").innerHTML = countOfPurchases;
};

countOfPlants();

function checkInStock(array) {
    let checkbox = document.getElementById('inStock');

    if (checkbox.checked) {
        let plantsInStock = [];

        for (let plant of array)
            if (plant.inStock)
                plantsInStock.push(plant);

        plants = plantsInStock;
    } else {
        plants = plantsCopy.slice();
    }
}

document.getElementById('priceasc').onclick = function () {
    let plantsSortedByPrice = plantsCopy.sort(
        (pl1, pl2) =>
            parseFloat(pl1.price, 10) - parseFloat(pl2.price, 10)
    );
    checkInStock(plantsSortedByPrice);

    showPage(numbersOfPages[0], plants);
}

document.getElementById('pricedesc').onclick = function () {
    let plantsSortedByPrice = plantsCopy.sort(
        (pl1, pl2) =>
            parseFloat(pl2.price, 10) - parseFloat(pl1.price, 10)
    );
    checkInStock(plantsSortedByPrice);

    showPage(numbersOfPages[0], plants);
}

document.getElementById('inStock').onchange = function () {
    checkInStock(plants);
    setPagesCount();
}

document.getElementById('reset').onclick = function () {
    plants = defaultArrayOfPlants.slice();
    document.getElementById('inStock').checked = false;

    setPagesCount();
}

let plantsInCart = {};

if ('cart' in localStorage) {
    array = Object.values(JSON.parse(localStorage.getItem('cart')));
    for (let i = 0; i < array.length; i++)
        plantsInCart[array[i]['id']] = array[i];
}

list.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart')) {
        let id = e.target.dataset['id'];

        if (plantsInCart[id] === undefined) {
            plantsInCart[id] = defaultArrayOfPlants[id - 1];
            plantsInCart[id]['count'] = 1;
        } else {
            plantsInCart[id]['count']++;
        }

        console.log(plantsInCart);

        localStorage.setItem('cart', JSON.stringify(plantsInCart));

        countOfPlants();
    }
});

