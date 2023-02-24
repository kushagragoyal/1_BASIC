var Form = document.getElementById('my-form')                   //CALLING FORM ELEMENT BY IT'S ID 
Form.addEventListener('submit',addUser)                         //CALLING addUser FUNCTION WHEN USER CLICKS ON 
                                                                //SUBMIT
function addUser(e){                                            //DEFINEING AddUser FUNCTION
    e.preventDefault()                                          

    var nameInput = document.getElementById('name').value       //STORING NAME AND EMAIL VALUE IN nameInput and
    var emailInput = document.getElementById('email').value     //emailInput VARIABLE

    let user = {                                                //CREATING AN OBJECT IN WHICH WE ARE STORING 
        name : nameInput,                                       //NAME AND EMAIL OF USER
        Email : emailInput
    }

    let user_serialized = JSON.stringify(user)                  //IN LOCAL STORAGE ONLY STRINGS CAN BE STORED,
                                                                //HENCE WE ARE CONVERTING OBJECT TO STRING
    localStorage.setItem('user',user_serialized)                //STORING THE CONVERTED STRING IN LOCAL STORAGE

    var ul = document.getElementById('list-main')
    ul.innerHTML = ul.innerHTML + `<li>${nameInput} - ${emailInput}</li>`
    console.log(ul)
    
}
