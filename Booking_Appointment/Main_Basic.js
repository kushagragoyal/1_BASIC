var Form = document.getElementById('my-form')                //CALLING FORM ELEMENT BY IT'S ID 

Form.addEventListener('submit',addUser)                      //CALLING addUser FUNCT. WHEN USER CLICKS ON SUBMIT 
function addUser(e){                                         //DEFINEING AddUser FUNCTION
    e.preventDefault()

    var nameInput = document.getElementById('name').value    //STORING NAME AND EMAIL VALUE IN nameInput and
    var emailInput = document.getElementById('email').value  //emailInput VARIABLE

    let user = {                                             //CREATING AN OBJECT IN WHICH WE ARE STORING NAME 
        name : nameInput,                                    //AND EMAIL OF USER
        Email : emailInput}

    let user_serialized = JSON.stringify(user)              //IN LOCAL STORAGE ONLY STRINGS CAN BE STORED,HENCE
                                                            //WE ARE CONVERTING OBJECT TO STRING
    
    localStorage.setItem('user'+emailInput,user_serialized) //STORING DATA IN LOCAL STORAGE AND DEFINEING KEY AS 
                                                            //USER+emailInput,TO MAKE KEY DIFF. FOR EVERY CASE                       

    var ParEle = document.getElementById('list-main')       //CALLING UL BY IT'S ID AND STROING IT IN ParEle 

    var chiEle = document.createElement('li')               //CREATING LI ELEMENT AND STORING IT IN ChiElel
    chiEle.textContent = nameInput +' - '+ emailInput       //STROING Name AND EmailInput AS TEXT IN ChiEle

    var Del = document.createElement('button')              //CREATING DELETE BUTTON
    Del.classList.add('btn')                                //ADDING CLASS btn TO DELETE BUTTON
    Del.appendChild(document.createTextNode('Delete'))      //GIVING DELETE TEXT TO DELETE BUTTON

    Del.addEventListener('click',deleteUser)                //CALLING DeleteUser FUNC. WHEN USER CLICK ON DELETE

    function deleteUser(e){                                 //CREATING deleteUser FUNCTION
        e.preventDefault()                                  
        localStorage.removeItem('user'+emailInput)          //REMOVING ELEMENT FROM LOCAL STORAGE USING KEY
        ParEle.removeChild(chiEle)                          //REMOVING LI ELEMENT FROM LI-LIST OF WEB PAGE        
        }
    chiEle.appendChild(Del)                                 //ADDING DELETE BUTTON TO chiEle
    ParEle.appendChild(chiEle)                              //ADDING LI ELEMENT TO LI-LIST
}
