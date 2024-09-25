const items = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const itemForm = document.getElementById('item-form');
function addItem(e) {
	e.preventDefault();

	const newItem = items.value;
	if (newItem === '') {
		alert('please add item');
		return;
	}
	// create list item.
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(newItem));

	const button = createButton('btn');
	li.appendChild(button);
	itemList.appendChild(li);
	items.value = ' ';
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
itemForm.addEventListener('submit', addItem);
