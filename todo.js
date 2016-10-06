
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
    
    var newItem = document.createElement("LI");
    var text = document.createTextNode(document.getElementById('todo-input').value);
    newItem.appendChild(text);
    document.getElementsByClassName('todo-list-items')[0].appendChild(newItem);
  }

  function markAsDone() {
    //var doneItem=document.getElementsByClassName( "todo-list-items" )[0].firstChild.nextSibling.nextSibling.nextSibling;
    var doneItem=document.getElementsByTagName("li")[0];


    
    
    var newItem = document.createElement("LI").appendChild(doneItem);
    newItem.setAttribute("class","done");
        
    document.getElementsByClassName('done-list-items')[0].appendChild(newItem);
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";

    console.log(document.getElementsByClassName("done"));
    console.log(document.getElementsByTagName("div"));
    console.log(document.getElementsByTagName("div")[2]);
    var newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    newDiv.setAttribute("id","johnny");
   
    console.log(document.getElementsByTagName("div")[2].nextElementSibling);

  }
  
}
