const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear-list');
const filter = document.getElementById('filter');
const formBtn = document.querySelector('button');
let isEditMode = false;

function displayItem() {
	const itemFromDisplay = getItemFromStorage();
	itemFromDisplay.forEach((item) => addItemToDOM(item));
	checkUI();
}
function onAddItemSubmit(e) {
	e.preventDefault();
	const newItem = itemInput.value;
	if (newItem === '') {
		alert('please enter item');
		return;
	}
	// Create item DOM element.
	addItemToDOM(newItem);
	// create item to local storage.
	addItemToStorage(newItem);
	checkUI();
	itemInput.value = ' ';
}
function addItemToDOM(e) {
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(e));

	const button = createButton('remove-btn');
	li.appendChild(button);

	itemList.appendChild(li);
}
function addItemToStorage(item) {
	const itemfromStorage = getItemFromStorage();

	itemfromStorage.push(item);

	// consvert to JSON string and set to local Storage.

	localStorage.setItem('items', JSON.stringify(itemfromStorage));
}
function getItemFromStorage(item) {
	let itemfromStorage;
	if (localStorage.getItem('items') === null) {
		itemfromStorage = [];
	} else {
		itemfromStorage = JSON.parse(localStorage.getItem('items'));
	}
	return itemfromStorage;
}

function createButton(classes) {
	const button = document.createElement('button');
	button.className = classes;
	const Icon = createIcon('bx bx-x');
	button.appendChild(Icon);
	return button;
}
function createIcon(classes) {
	const Icon = document.createElement('i');
	Icon.className = classes;
	return Icon;
}
function removeItem(item) {
	// remove item from DOM.
	item.remove();

	// remove item from Storage.
	removeItemFromStorage(item.textContent);

	checkUI();
}
function removeItemFromStorage(item) {
	let itemfromStorage = getItemFromStorage();
	// filter out item to be remove.
	itemfromStorage = itemfromStorage.filter((i) => i !== item);

	// Re-set the local storage.
	localStorage.setItem('items', JSON.stringify(itemfromStorage));
}
function onclickItem(e) {
	if (e.target.parentElement.classList.contains('remove-btn')) {
		if (confirm('are you sure')) {
			removeItem(e.target.parentElement.parentElement);
		}
	} else {
		setItemEdit(e.target);
	}
}
function setItemEdit(item) {
	isEditMode = true;
	item.classList.add('add-mode');
	formBtn.innerHTML = "<i class='bx bxs-pencil'></i>update Item ";
	formBtn.style.backgroundColor = 'green';
	itemInput.value = item.textContent;
}
function clearItem(e) {
	while (itemList.firstChild) {
		itemList.removeChild(itemList.firstChild);
	}
}
function checkUI() {
	const items = itemList.querySelectorAll('li');
	if (items.length === 0) {
		clearBtn.style.display = 'none';
		filter.style.display = 'none';
	} else {
		clearBtn.style.display = 'block';
		filter.style.display = 'block';
	}
}
checkUI();
function filterItem(e) {
	const items = itemList.querySelectorAll('li');
	const text = e.target.value.toLowerCase();
	items.forEach((item) => {
		const itemName = item.firstChild.textContent.toLowerCase();
		if (itemName.indexOf(text) != -1) {
			item.style.display = 'flex';
		} else {
			item.style.display = 'none';
		}
	});
}
// Event Listeners
itemList.addEventListener('click', onclickItem);
itemForm.addEventListener('submit', onAddItemSubmit);
clearBtn.addEventListener('click', clearItem);
filter.addEventListener('input', filterItem);
document.addEventListener('DOMContentLoaded', displayItem);
