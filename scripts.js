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