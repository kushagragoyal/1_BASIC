var form = document.getElementById('addForm');       //GETTING FORM ELEMENT BY ID
var itemList = document.getElementById('items');     //GETTING ITEMS LIST BY ID

form.addEventListener('submit', addItem);            //CALLS addItem FUNCTION WHEN USER CLICK ON SUBMIT


function addItem(e){                       //CREATING addItem FUNCTION HERE
  e.preventDefault();                      //USING PREVENT DEFAULT SO THAT FORM CAN BE STOPPED FORM SUBMITTING

  var newItem = document.getElementById('item').value; //TAKING THE VALUE OF I/P FIELD, HAVING ID item.

  var li = document.createElement('li');               //CREATING NEW ELEMENT li, AND GIVING IT CLASS NAME AS
  li.className = 'list-group-item';                    //list-group-item
  
  li.appendChild(document.createTextNode(newItem));   //CREATING TEXT NODE AND ADDING VALUE OF I/P FIELD, TO THE 
                                                      //TEXT NODE AND THEN ADDING THAT TEXT NODE IN THE NEWLY 
                                                      //CREATED li ITEM
  var delbtn = document.createElement('button')       //CREATING DELETE BUTTON, TO DISPLAY IT WHENEVER A NEW
                                                      //LIST ITEM IS ADDED TO LIST
  delbtn.className =                                  //GIVING THAT DELETE BUTTON SAME STYLE AS OF OTHER DELETE
  'btn btn-danger btn-sm float-right delete'          //BUTTON, THROUGH BOOTSTRAP CLASSES
  delbtn.appendChild(document.createTextNode('X'))    //ADDING TEXT TO THAT DELETE BUTTON
  li.appendChild(delbtn)                              //ADDING THE DEL BUTTON, IN THE NEWLY CREATED li ITEM
  
  itemList.appendChild(li);                           //ADDING THAT li ITEM TO THE MAIN LI LIST
}

itemList.addEventListener('click',removeItem)         //CALLS removeItem WHEN USER CLICKS

function removeItem(e){                        //CREATING FUNCTION removeItem
    if(e.target.classList.contains('delete'))  //HERE, DEFINING THAT IF CLASS LIST HAVE DELETE THEN GO AHEAD,
                                               //ELSE NOT, BECAUSE OF THIS, LISTITEM WILL GET DELETED WHEN WE 
                                               //CLICK ON CROSS IF WE WON'T USE THIS, LISTITEM WILL GET REMOVE 
                                               //EVEN WHEN WE CLICK ANYWHERE ON LIST
        if(confirm('Are you sure ?')){         //ASKING USER FOR CONFIRMATION BEFORE DELETING LISTITEM, IF HE 
                                               //CONFIRMS THEN GOING AHEAD ELSE NOT
            var li = e.target.parentElement    //delete IS THE CHILD ELEMENT OF li, AND WE WERE TARGETING ONLY
                                               //delete ABOVE, BUT HERE WE WANT ENTIRE li TO GET DELETED, HENCE
                                               //WE ARE TARGETING PARENT ELEMENT AND STORING IT IN li 
            itemList.removeChild(li)           //REMOVING li FROM itemList
        }
    }                   