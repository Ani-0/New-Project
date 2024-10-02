const itemForm = document.getElementById('form-item');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('list-Item');
const clearBtn = document.getElementById('clear-Item');
const filterItem = document.getElementById('filter');
let itemData = [];

function addItem(e) {
	e.preventDefault();

	const newItem = itemInput.value;
	if (newItem == '') {
		alert('Please add Item');
		return;
	}
	storeData(newItem);
	// itemInput.value == '';
	appendList(newItem);
	checkUI();
}

function appendList(items) {
	const button = createButton('remove-btn');
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(items));
	li.appendChild(button);
	itemList.appendChild(li);
	itemInput.value = '';
	itemInput.focus();
}
function setItem() {
	localStorage.setItem('dataItem', JSON.stringify(itemData));
}

function getItem() {
	const getItems = localStorage.getItem('dataItem');
	return JSON.parse(getItems);
}
// Initialiging the
function init() {
	if (getItem() !== null) {
		const items = getItem();
		items.forEach((item) => appendList(item.data));
	}
}

function storeData(data) {
	if (itemData.length === 0) {
		itemData.push({ id: 0, data: data });
	} else {
		const duplicate = itemData.find((item) => item.data === data);
		if (!duplicate) {
			itemData.push({ id: itemData.length, data: data });
		} else {
			alert(data + ' already exists');
		}
	}
	setItem();
	console.log(itemData, '=============');
}

init();

function createButton(btn) {
	const button = document.createElement('button');
	button.className = btn;
	const icon = createIcon('bx bx-x');
	button.appendChild(icon);
	return button;
}
function createIcon(iBtn) {
	const icon = document.createElement('i');
	icon.className = iBtn;
	return icon;
}
function removeitem(e) {
	if (e.target.parentElement.classList.contains('remove-btn')) {
		if (confirm('are you sure')) {
			const itemText = e.target.parentElement.parentElement.textContent.trim();
			removeFromStorage(itemText);

			e.target.parentElement.parentElement.remove();
			checkUI();
		}
	}
}
function removeFromStorage(item) {
	const items = getItem();
	const index = items.findIndex((i) => i.data === item);
	if (index !== -1) {
		items.splice(index, 1);
		localStorage.setItem('dataItem', JSON.stringify(items));
		itemData = items;
	}
}
function checkUI() {
	const listItem = document.querySelectorAll('li');

	if (listItem.length === 0) {
		clearBtn.style.display = 'none';
		filterItem.style.display = 'none';
	} else {
		clearBtn.style.display = 'block';
		filterItem.style.display = 'block';
	}
}

function clearItem() {
	while (itemList.firstChild) {
		itemList.removeChild(itemList.firstChild);
	}
	checkUI();
}
function filter(e) {
	const items = document.querySelectorAll('li');
	const text = e.target.value.toLowerCase();

	items.forEach((item) => {
		const itemsName = item.firstChild.textContent.toLowerCase();

		if (itemsName.indexOf(text) != -1) {
			item.style.display = 'flex';
		} else {
			item.style.display = 'none';
		}
	});
}
filterItem.addEventListener('input', filter);
clearBtn.addEventListener('click', clearItem);
itemList.addEventListener('click', removeitem);
itemForm.addEventListener('submit', addItem);
// document.addEventListener('DOMContentLoaded', displayFromStorage);
checkUI();
