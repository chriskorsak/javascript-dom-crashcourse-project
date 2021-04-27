//Global variables//
//input text box
const input = document.querySelector('#newItem');
//submit button
const submitButton = document.querySelector('input[type="submit"]');
// list of items
const list = document.querySelector('ul');
// filter text box
const filter = document.querySelector('#filter');


//disable submit button by default until input has text
submitButton.disabled = true;
input.addEventListener('keyup', function() {
  if (input.value.length > 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
})

//submit form
document.querySelector('form').addEventListener('submit', newListItem);

// add a new list item when submitting form
function newListItem(e) {
  //prevent form default behavior
  e.preventDefault();
  
  //create text node with input
  const inputText = document.createTextNode(input.value);
  
  //create new list element and add text node
  const listItem = document.createElement('li');
  listItem.appendChild(inputText);

  // create delete button for list item
  const deleteButton = document.createElement('button');
  deleteButton.className = 'remove-item';
  deleteButton.textContent = 'X';
  listItem.appendChild(deleteButton);

  //add newly created list item to list
  document.querySelector('ul').append(listItem);
  //clear out input
  input.value = '';
}

//delete list item
list.addEventListener('click', function(e) {
  // if target element has 'remove item' class name...
  if (e.target.classList.contains('remove-item')) {
    //select parent element of delete button
    const listItem = e.target.parentElement;
    //remove list item
    list.removeChild(listItem);
  }
})

//filter results
filter.addEventListener('keyup', filterItems);

function filterItems() {
  //get text from filter box and convert to lowercase for comparison
  const text = filter.value.toLowerCase();
  //get all list items from ul (global variable)
  const listItems = list.getElementsByTagName('li');
  //convert html collection to array
  const listArray = [...listItems];
  //iterate over array and filter items if text doesn't match
  for (let i = 0; i < listArray.length; i++) {
    //get text content from array element
    const itemName = listArray[i].firstChild.textContent;
    //compare array element text with filter box text
    //indexOf() returns index of array element where equal and -1 if not
    if (itemName.toLowerCase().indexOf(text) != -1) {
      listItems[i].style.display = 'flex';
    } else {
      listItems[i].style.display = 'none';
    }
  }
}