// Function to load user data from the server and display it on the page
function loadUserDataFromServer() {
    axios.get("https://crudcrud.com/api/c033b131734044caa3bcd7f47e670c23/AppointmentData")
        .then((response) => {
            const userList = document.getElementById("list-main");
            userList.innerHTML = "";

            response.data.forEach((user) => {
                const listItem = document.createElement("li");
                listItem.textContent = `Name: ${user.name}, Email: ${user.Email}`;

                userList.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error(error);
        });
}

// Call loadUserDataFromServer when the page loads
window.onload = function() {
    loadUserDataFromServer();
};

var Form = document.getElementById('my-form'); // Calling the form element by its ID

Form.addEventListener('submit', addUser); // Calling addUser function when the user clicks on submit

function addUser(e) {
    e.preventDefault();

    var nameInput = document.getElementById('name').value; // Storing name and email value in nameInput
    var emailInput = document.getElementById('email').value; // and emailInput variable

    let user = { // Creating an object in which we are storing name
        name: nameInput, // and email of the user
        Email: emailInput,
    };

    let user_serialized = JSON.stringify(user); // In local storage, only strings can be stored, hence
    // we are converting the object to a string

    // This is the code for making a network call to CRUDCRUD and storing the data in CRUDCRUD
    axios
        .post("https://crudcrud.com/api/c033b131734044caa3bcd7f47e670c23/AppointmentData", user)
        .then((response) => {
            console.log(response);
            loadUserDataFromServer();
        })
        .catch((err) => {
            console.log(err);
        });

    // (1#) This commented code below is for storing data in local storage, and instead of this, we will
    // use the above code in which we are making a network call to CRUDCRUD server and storing the data in CRUDCRUD

    //localStorage.setItem('user' + emailInput, user_serialized); // Storing data in local storage and defining the key as
    // USER+emailInput, to make the key different for every case

    var ParEle = document.getElementById('list-main'); // Calling UL by its ID and storing it in ParEle

    var chiEle = document.createElement('li'); // Creating an LI element and storing it in chiEle
    chiEle.textContent = nameInput + ' - ' + emailInput; // Storing Name and EmailInput as text in chiEle

    var Del = document.createElement('button'); // Creating a delete button
    Del.classList.add('btn'); // Adding the class 'btn' to the delete button
    Del.appendChild(document.createTextNode('Delete')); // Giving 'Delete' text to the delete button

    Del.addEventListener('click', deleteUser); // Calling the deleteUser function when the user clicks on delete

    function deleteUser(e) {
        e.preventDefault();
        localStorage.removeItem('user' + emailInput); // Removing the element from local storage using the key
        ParEle.removeChild(chiEle); // Removing the LI element from the UL list of the web page
    }

    chiEle.appendChild(Del); // Adding the delete button to chiEle
    ParEle.appendChild(chiEle); // Adding the LI element to the UL list
}
