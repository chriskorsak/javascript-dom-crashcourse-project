//Global variables//
//input text box
const input = document.querySelector('input[type="text"]');
//submit button
const submitButton = document.querySelector('input[type="submit"]');
// list of items
const list = document.querySelector('ul');


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
  deleteButton.className = 'remove-item cheboygan';
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