var form = document.getElementById('addForm');  //GETTING FORM ELEMENT BY ID AND STORING IT IN form VARIABLE
var itemList = document.getElementById('items');//GETTING ITEMS LIST BY ID AND STORING IT IN itmeList VARIABLE
var filter = document.getElementById('filter'); //GETTING FILTER INPUT BY ID AND STORING IT IN filter VARIABLE    

//CODE FOR ADDING A NEW ITEM IN THE LIST.
form.addEventListener('submit', addItem);       //CALLS addItem FUNCTION WHEN USER CLICK ON SUBMIT

function addItem(e){                            //CREATING addItem FUNCTION 
  e.preventDefault();                           //PREVENT DEFAULT STOPS FORM FROM GETTING SUBMITT

  var newItem = document.getElementById('item').value; //TAKING THE VALUE OF I/P FIELD, HAVING ID item.
  var newDescrp = document.getElementById              //TAKING THE VALUE OF I/P FIELD, HAVING ID 
  ('description').value                                //description.

  var li = document.createElement('li');              //CREATING NEW ELEMENT li, AND GIVING IT CLASS NAME AS
  li.className = 'list-group-item';                   //list-group-item
  li.appendChild(document.createTextNode(newItem));   //CREATING TEXT NODE AND ADDING I/P FIELD VALUE TO IT,
  li.appendChild(document.createTextNode(newDescrp)); //AND THEN ADDING TEXT NODE TO NEWLY CREATED li ITEM

  var editbtn = document.createElement('button')                       //EDIT BUTTON CREATION, REFER TO DEL. 
  editbtn.className = 'btn btn-primary btn-sm float-right'             //BUTTON CREATION FOR UNDERSTANDING
  editbtn.appendChild(document.createTextNode('EDIT')) 
  li.appendChild(editbtn)
  itemList.appendChild(li)

  var delbtn = document.createElement('button')       //CREATING DELETE BUTTON                                         
  delbtn.className =                                  //GIVING NEW DELETE BUTTON SAME STYLE AS OTHER DELETE
  'btn btn-danger btn-sm float-right delete'          //BUTTONS, THROUGH BOOTSTRAP CLASSES
  delbtn.appendChild(document.createTextNode('X'))    //ADDING TEXT TO THAT DELETE BUTTON
  li.appendChild(delbtn)                              //ADDING THE DEL BUTTON, IN THE NEWLY CREATED li ITEM
  itemList.appendChild(li);                           //ADDING THAT li ITEM TO THE MAIN LI LIST
}

//CODE FOR DELETING ITEM FROM LIST THROUGH CROSS
itemList.addEventListener('click',removeItem)  //CALLS removeItem FUNCTION WHEN USER CLICKS.

function removeItem(e){                        //CREATING removeItem FUNCTION
    if(e.target.classList.contains('delete'))  //HERE, DEFINING THAT IF CLASS LIST HAVE DELETE THEN GO AHEAD,
                                               //ELSE NOT, BECAUSE OF THIS, LISTITEM WILL GET DELETED WHEN WE 
                                               //CLICK ON CROSS IF WE WON'T USE THIS, LISTITEM WILL GET REMOVE 
                                               //EVEN WHEN WE CLICK ANYWHERE ON LIST
        if(confirm('Are you sure ?')){         //ASKING USER FOR CONFIRMATION BEFORE DELETING LISTITEM
            var li = e.target.parentElement    //delete IS THE CHILD ELEMENT OF li, AND WE WERE TARGETING ONLY
                                               //delete ABOVE, BUT HERE WE WANT ENTIRE li TO GET DELETED, HENCE
                                               //WE ARE TARGETING PARENT ELEMENT AND STORING IT IN li 
            itemList.removeChild(li)           //REMOVING li FROM itemList
        }
    }           
    
//CODE FOR FILTER OR SEARCHING ITEM FROM ITEMLIST
filter.addEventListener('keyup',filterItems)   //CALLS filterItem FUNCTION WHEN USER TYPES.

function filterItems(e){                       //CREATING filterItems FUNCTION
    var text = e.target.value.toLowerCase()    //STORING THE VALUE WHICH WE ARE GETTING FROM SEARCH I/P IN TEXT
                                               //VARIABLE AND CONVERTING THAT VALUE TO LOWER CASE
    var items = itemList.                      //TAKING ALL THE VALUES WHICH ARE PRESENT IN ITEMLIST AND STORING
    getElementsByTagName('li')                 //THEM IN TO ITEMS VARIABLE                                       

    Array.from(items).forEach(function(item){  //CONVERTING THE HTML COLLECTION TO AN ARRAY
        var i = item.firstChild.textContent    //STORING 1st CHILD OF ARRAY (i.e 1st I/P BOX[ITEM NO]) IN I 
                                               //VARIABLE USING FOR EACH LOOP
        var j = item.childNodes[1].textContent //STORING 2nd CHILD OF ARRAY (i.e 2nd I/P BOX[DESCRIPTION]) IN J
        if((i.toLowerCase().indexOf(text)!= -1)||   //CONVERTING I,J TO LOWER CASE AND COMPARING IT WITH TEXT
        (j.toLowerCase().indexOf(text)!=-1)){       //VARIABLE, IF THEY MATCH DISPLAY ELSE DON'T DISPLAY        
            item.style.display = 'block'     
        }
        else{
            item.style.display = 'none'
        }
    })
}                                           
