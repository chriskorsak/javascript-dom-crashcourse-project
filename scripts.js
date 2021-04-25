//submit form with new item
document.querySelector('form').addEventListener('submit', function(e) {
  
  //prevent form default behavior
  e.preventDefault();
  
  //get input value
  const input = document.querySelector('input[type="text"]');
  
  //create new list element
  const listItem = document.createElement('li');
  listItem.textContent = input.value;

  // create delete button for list item
  const deleteButton = document.createElement('button');
  deleteButton.className = 'remove-item';
  deleteButton.textContent = 'X';
  listItem.append(deleteButton);

  //add newly created list item to list
  document.querySelector('ul').append(listItem);
  //clear out input
  input.value = '';
})

//disable submit button until input has text

//disable submit button by default
const submitButton = document.querySelector('input[type="submit"]');
submitButton.disabled = true;

//check input for text and enable button if text present
const input = document.querySelector('input[type="text"]');
input.addEventListener('keyup', function() {
  if (input.value.length > 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
})

//delete list item
const list = document.querySelector('ul');
//add click event to entire list
list.addEventListener('click', function(e) {
  // if the event target classname is 'remove item'...
  if (e.target.className === 'remove-item') {
    //select parent element of delete button
    const listItem = e.target.parentElement;
    //remove list item
    list.removeChild(listItem);
  }
})