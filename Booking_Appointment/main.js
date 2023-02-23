var Form = document.getElementById('my-form')

Form.addEventListener('submit',addUser)

function addUser(e){
    e.preventDefault()

    var nameInput = document.getElementById('name').value
    var emailInput = document.getElementById('email').value
    
    localStorage.setItem('name',nameInput)
    localStorage.setItem('Email',emailInput)
}
