let items = [
    { path: 'My Plants/airplant1.jpg', name: 'Plant 1', description: 'Just plant' },
    { path: 'My Plants/airplant2.jpg', name: 'Plant 2', description: 'Just plant 2' },
    { path: 'My Plants/airplant3.jpg', name: 'Plant 3', description: 'Just plant 3' },
    { path: 'My Plants/airplant4.jpg', name: 'Plant 4', description: 'Just plant 4' },
    { path: 'My Plants/airplant5.jpg', name: 'Plant 5', description: 'Just plant 5' },
    { path: 'My Plants/airplant6.jpg', name: 'Plant 6', description: 'Just plant 6' },
    { path: 'My Plants/airplant7.jpg', name: 'Plant 7', description: 'Just plant 7' },
    { path: 'My Plants/airplant8.jpg', name: 'Plant 8', description: 'Just plant 8' },
    { path: 'My Plants/airplant9.jpg', name: 'Plant 9', description: 'Just plant 9' },
    { path: 'My Plants/airplant10.jpg', name: 'Plant 10', description: 'Just plant 10' },
    { path: 'My Plants/airplant1.jpg', name: 'Plant 11', description: 'Just plant 11' },    
    { path: 'My Plants/airplant2.jpg', name: 'Plant 12', description: 'Just plant 12' },    
    { path: 'My Plants/airplant3.jpg', name: 'Plant 13', description: 'Just plant 13' },
    { path: 'My Plants/airplant4.jpg', name: 'Plant 14', description: 'Just plant 14' },
    { path: 'My Plants/airplant5.jpg', name: 'Plant 15', description: 'Just plant 15' },
    { path: 'My Plants/airplant6.jpg', name: 'Plant 16', description: 'Just plant 16' },
    { path: 'My Plants/airplant7.jpg', name: 'Plant 17', description: 'Just plant 17' },
    { path: 'My Plants/airplant8.jpg', name: 'Plant 18', description: 'Just plant 18' },
    { path: 'My Plants/airplant9.jpg', name: 'Plant 19', description: 'Just plant 19' },
    { path: 'My Plants/airplant10.jpg', name: 'Plant 20', description: 'Just plant 20' },
]

let list = document.getElementById('items-list');
let pagination = document.getElementById('pagination');

let itemsOnPage = 8;
let countOfPages = Math.ceil(items.length / itemsOnPage);

function showPage(number) {    
    let active = document.querySelector('#pagination a.active');

    if (active) {
        active.classList.remove('active');
    }

    number.classList.add('active');

    let pageNumber = +number.innerHTML;

    let displayedItems = items.slice((pageNumber - 1) * itemsOnPage, pageNumber * itemsOnPage);
    
    list.innerHTML = '';
    for (let displayedItem of displayedItems) {
        let div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `<img src=\"` + displayedItem.path + `\">
                        <div class=\"description\">
                            <h1 class=\"display\">` + displayedItem.name + `</h1>
                            <p class=\"description-text\">` + displayedItem.description + `</p>
                        </div>`;            
        list.appendChild(div);
    }
};

let numbersOfPages = [];
for (let i = 1; i <= countOfPages; i++) {
    let a = document.createElement('a');
    a.classList.add('page-link');
    a.innerHTML = i;
    pagination.appendChild(a); 
    numbersOfPages.push(a);
}
showPage(numbersOfPages[0]);

let pages = document.getElementsByClassName('page-link');

for (let page of pages) {
    page.addEventListener('click', function() {
        showPage(this);
    })
}

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