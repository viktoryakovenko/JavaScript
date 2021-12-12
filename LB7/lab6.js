document.getElementById('listView').onclick = function changeToList() {
    document.getElementById('items-list').classList.remove('direction-row');
    document.getElementById('items-list').classList.add('direction-column');
    document.getElementById('items-list').classList.add('left');
}

document.getElementById('gridView').onclick = function changeToGrid() {
    document.getElementById('items-list').classList.remove('left');
    document.getElementById('items-list').classList.remove('direction-column');
    document.getElementById('items-list').classList.add('direction-row');
}

let plants = [
    { id: 1, path: 'Images/My Plants/airplant1.jpg', name: 'Plant 1', description: 'Just plant', price: '450$', inStock: true },
    { id: 2, path: 'Images/My Plants/airplant2.jpg', name: 'Plant 2', description: 'Just plant 2', price: '350$', inStock: false },
    { id: 3, path: 'Images/My Plants/airplant3.jpg', name: 'Plant 3', description: 'Just plant 3', price: '50$', inStock: true },
    { id: 4, path: 'Images/My Plants/airplant4.jpg', name: 'Plant 4', description: 'Just plant 4', price: '70$', inStock: true },
    { id: 5, path: 'Images/My Plants/airplant5.jpg', name: 'Plant 5', description: 'Just plant 5', price: '120$', inStock: true },
    { id: 6, path: 'Images/My Plants/airplant6.jpg', name: 'Plant 6', description: 'Just plant 6', price: '40.5$', inStock: false },
    { id: 7, path: 'Images/My Plants/airplant7.jpg', name: 'Plant 7', description: 'Just plant 7', price: '45$', inStock: false },
    { id: 8, path: 'Images/My Plants/airplant8.jpg', name: 'Plant 8', description: 'Just plant 8', price: '43$', inStock: false },
    { id: 9, path: 'Images/My Plants/airplant9.jpg', name: 'Plant 9', description: 'Just plant 9', price: '20$', inStock: true },
    { id: 10, path: 'Images/My Plants/airplant10.jpg', name: 'Plant 10', description: 'Just plant 10', price: '150$', inStock: true },
    { id: 11, path: 'Images/My Plants/airplant1.jpg', name: 'Plant 11', description: 'Just plant 11', price: '200$', inStock: true },
    { id: 12, path: 'Images/My Plants/airplant2.jpg', name: 'Plant 12', description: 'Just plant 12', price: '160$', inStock: false },
    { id: 13, path: 'Images/My Plants/airplant3.jpg', name: 'Plant 13', description: 'Just plant 13', price: '175$', inStock: true },
    { id: 14, path: 'Images/My Plants/airplant4.jpg', name: 'Plant 14', description: 'Just plant 14', price: '40.6$', inStock: true },
    { id: 15, path: 'Images/My Plants/airplant5.jpg', name: 'Plant 15', description: 'Just plant 15', price: '60$', inStock: true },
    { id: 16, path: 'Images/My Plants/airplant6.jpg', name: 'Plant 16', description: 'Just plant 16', price: '45$', inStock: false },
    { id: 17, path: 'Images/My Plants/airplant7.jpg', name: 'Plant 17', description: 'Just plant 17', price: '50$', inStock: true },
    { id: 18, path: 'Images/My Plants/airplant8.jpg', name: 'Plant 18', description: 'Just plant 18', price: '70$', inStock: true },
    { id: 19, path: 'Images/My Plants/airplant9.jpg', name: 'Plant 19', description: 'Just plant 19', price: '80$', inStock: false },
    { id: 20, path: 'Images/My Plants/airplant10.jpg', name: 'Plant 20', description: 'Just plant 20', price: '100$', inStock: true },
]

let list = document.getElementById('items-list');
let pagination = document.getElementById('pagination');

let plantsOnPage = 8;

function showPage(number, array) {
    let active = document.querySelector('#pagination a.active');

    if (active) {
        active.classList.remove('active');
    }

    number.classList.add('active');

    let pageNumber = +number.innerHTML;

    let displayedItems = array.slice((pageNumber - 1) * plantsOnPage, pageNumber * plantsOnPage);

    list.innerHTML = '';
    for (let displayedItem of displayedItems) {
        let div = document.createElement('div');
        div.className = 'item';
        text = `<div class="picture">
                            <img class="plant" src="` + displayedItem.path + `">`

        if (!displayedItem.inStock)
            text += `<div class="notStock"><img src="/Images/My Plants/soldout.jpg"></div>`;


        text += `</div>
                <div class="description">
                    <h1 class="display">` + displayedItem.name + `</h1>
                    <p class="description-text">` + displayedItem.description + `, ` + displayedItem.price + `</p>`

        if (displayedItem.inStock)
            text += `<button data-id="` + displayedItem.id + `" class="btn btn-success add-to-cart">Add to Cart</button>`;

        div.innerHTML += text + `</div>`;
        list.appendChild(div);
    }
};

let numbersOfPages = [];

function setPagesCount() {
    let countOfPages = Math.ceil(plants.length / plantsOnPage);
    pagination.innerHTML = '';
    numbersOfPages = [];
    for (let i = 1; i <= countOfPages; i++) {
        let a = document.createElement('a');
        a.classList.add('page-link');
        a.innerHTML = i;
        pagination.appendChild(a);
        numbersOfPages.push(a);
    }

    goToPage();

    showPage(numbersOfPages[0], plants);
}

function goToPage() {
    let pages = document.getElementsByClassName('page-link');

    for (let page of pages) {
        page.addEventListener('click', function () {
            showPage(this, plants);
        })
    }
}

setPagesCount();