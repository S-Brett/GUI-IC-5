// let list = document.querySelectorAll("#page ul")[0]; //
let list = document.getElementById("page").getElementsByTagName("ul")[0];
console.log(list);

// ADD NEW ITEM TO END OF LIST
let lastNewItem = document.createElement('li');
lastNewItem.appendChild(document.createTextNode("item"));

list.appendChild(lastNewItem);

// ADD NEW ITEM START OF LIST
let firstNewItem = document.createElement('li');
firstNewItem.appendChild(document.createTextNode("item"));

list.prepend(firstNewItem);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
console.log(list.getElementsByTagName("li"));
liArr = list.getElementsByTagName("li");

for(let i=0; i<liArr.length; i++){
	console.log(liArr[i]);
	liArr[i].classList.add('cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let heading = document.getElementById("page").getElementsByTagName("h2")[0];
let newParaChild = document.createElement('span');
newParaChild.appendChild(document.createTextNode(liArr.length));

heading.appendChild(newParaChild);
