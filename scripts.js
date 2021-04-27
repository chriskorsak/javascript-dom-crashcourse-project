//form input for adding new list item
const input = document.querySelector('input[type="text"]');


//disable submit button by default until input has text
const submitButton = document.querySelector('input[type="submit"]');
submitButton.disabled = true;

input.addEventListener('keyup', function() {
  if (input.value.length > 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
})

//add event when submitting form
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
const list = document.querySelector('ul');
//add click event to entire list
list.addEventListener('click', function(e) {
  // if the event target classname is 'remove item'...
  if (e.target.classList.contains('remove-item')) {
    //select parent element of delete button
    const listItem = e.target.parentElement;
    //remove list item
    list.removeChild(listItem);
  }
})