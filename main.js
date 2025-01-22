const inputTask = document.querySelector('#task');
const submitbtn = document.querySelector('#submit');
const searchInput = document.querySelector('#search');



//the event listener for the submit button
submitbtn.addEventListener('click', function() {
    submitbtn.classList.add('clickAnimation');
    setTimeout(() => {
        submitbtn.classList.remove('clickAnimation');
    }, 100);
    //checking if the input field is empty
   if(inputTask.value === '') {
       inputTask.style.borderColor = 'red';
       inputTask.style.color = 'red';
         inputTask.value = 'Please add a task';
        inputTask.classList.add('error');
       setTimeout(() => {
            inputTask.classList.remove('error');
           inputTask.style.borderColor = 'black';
           inputTask.style.color = 'grey';
           inputTask.value = '';
       }, 2000);
    
   }else {
    //create a new list item to store values from the user
    const li = document.createElement('li');
    li.contentEditable = true;
    li.innerHTML = `${inputTask.value} <div id="icons"><abbr title="Edit"><i class="bi bi-pencil-square"></i></abbr><abbr title="Delete"><i class="bi bi-trash3"></i></abbr></div>`;
    document.querySelector('ul').appendChild(li);
    inputTask.value = '';
   

   }
});


//function to remove a task
function removeTask(e) {
    if(e.target.classList.contains('bi-trash3')) {
        //removing the parent element of the parent element of the trash icon
        e.target.parentElement.parentElement.parentElement.remove();
    }
}
//calling the removeTask function
document.querySelector('ul').addEventListener('click', removeTask);


function editTask(e) {
    if(e.target.classList.contains('bi-pencil-square')) {
        const edit = prompt('Edit task');
        e.target.parentElement.parentElement.parentElement.firstChild.textContent = edit;
    }
}
document.querySelector('ul').addEventListener('click', editTask);

// function to search for a task
function searchTask() {
    const filter = searchInput.value.toLowerCase();
    const tasks = document.querySelectorAll('ul li');

    tasks.forEach(task => {
        const taskText = task.firstChild.textContent.toLowerCase();
        if (taskText.includes(filter)) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    });
}

// event listener for the search input
document.querySelector('#search').addEventListener('keyup', searchTask);