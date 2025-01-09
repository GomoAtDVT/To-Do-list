const inputTask = document.querySelector('#task');
const submitbtn = document.querySelector('#submit');



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
    // let counter = 0;
   li.appendChild(document.createTextNode(inputTask.value));
    document.querySelector('ul').appendChild(li);
    li.innerHTML = `${inputTask.value} <div id="icons"><abbr title="Edit"><i class="bi bi-pencil-square"></i></abbr><abbr title="Delete"><i class="bi bi-trash3"></i></abbr></div>`;
    // while (li) {
    //     li++ ;
    //     console.log(li);
        
    inputTask.value = '';

   }
});
 
// const taskText = document.createElement('span');
// taskText.contentEditable = true;
// taskText.textContent = task.text;
// taskText.style

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
        // li.innerHTML = `<input type="text" value="${inputTask.value}" id="edit"><button id="save">Save</button>`;
        // inputTask.appendChild(li);
    }
}
document.querySelector('ul').addEventListener('click', editTask);

// function to search for a task
function searchTask() {
    const searchInput = document.querySelector('#search');
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