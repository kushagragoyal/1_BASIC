console.dir(document)                               //GIVES ALL THE PROPERTIES AND METHODS OF THE DOCUMENT

//SOME OF THE COMMON AND FREQUENTLY USED MATHODS OF DOCUMENTS ARE
console.log(document.domain)                        //GIVES DOMAIN NAME
console.log(document.URL)                           //GIVES URL
console.log(document.title)                         //GIVES TITLE OF THE WEB PAGE
console.log(document.doctype)                       //GIVES TYPE OF DOCUMENT
console.log(document.all)                           //RETURN ARRAY (Which has everything present in web page)
                                                    //THIS ARRAY IS RETURED WITH INDEXES OF EACH ELEMENT
console.log(document.all[10])                       //SELECTING A OBJECT THROUGH INDEX OF ARRAY(Like H1 here)
console.log(document.head)                          //WILL GIVE US EVERYTHING IN HEAD
console.log(document.body)                          //WILL GIVE US EVERTHING IN BODY

//MANIPULATING THINGS USING JS AND DOM
document.title = 123                                //WEB PAGE TITLE CHANGED FROM Item Listerner TO 123
document.all[10].textContent = 'hello'              //CHANGEING H1 TO TEXT CONTENT TO HELLO
                                                    //USING all WITH INDEXES, IS NOT AN EFFECTIVE METHOD AS IF
                                                    //WE WILL ADD AN ELEMENT TO WEB PAGE BEFORE 10th ELEMENT,
                                                    //INDEXES WILL INCREASE BY ONE.

console.log(document.forms)                         //RETURN ARRAY WHERE ALL THE FORMS OF WEB PAGE WILL BE THEIR
                                                    //WITH INDEXES, IF NO FORM THEN WILL GIVE EMPTY ARRAY
console.log(document.forms[0])                      //THIS WILL GIVE FORM PRESENT AT INDEX 0 IN WEB PAGE
                                                    //SIMILARY WE CAN DO FOR (LINKS,IMG...)

//TEXTCONTENT AND INNERTEXT
//<H1 id="header-title"> Item <span style="display:none"> 123 </span>
var headertitle = document.getElementById("header-title")
console.log(headertitle.textContent)                //DON'T PAYS ATTENTION TO STYLEING
                                                    //OUTPUT, BROWSER--> Item, CONSOLE --> Item123
console.log(headertitle.innerText)                  //PAYS ATTENTION TO STYLEING
                                                    //OUTPUT, BROWSER-->Item, CONSOLE --> Item

//SELECTION
//getElementById
console.log(document.getElementById("header-title")) //WILL SELECT HEADER TITLE
var ht = document.getElementById("header-title")     //SAME, IT WILL ALSO SELECT HEADER TITLE 
console.log(ht)

ht.innerHTML = '<h3>Hello</h3>'                      //CHANGEING header-title TO HELLO WITH <H3> HEADING

var a = document.getElementById("addItem")           //SELECTING addItem AND CHANGEING IT'S PROPERTY
a.innerHTML = '<B>Add Items<B>'
a.style.color = 'green'

var h = document.getElementById("main-header")      //SELECTING MAIN-HEADER ID HERE
h.style.borderBottom = "Solid 3px #000"             //GIVING IT A BLACK BORDER AT BOTTOM

//getElementsByClassName
var items = document.getElementsByClassName('list-group-item') //SELECTING list-group-item (Multiple elements)
console.log(items)
console.log(items[2])                                          //SELECTING 2nd element of list-group-item
items[2].textContent = 'Hi'                                    //CHANGEING STYLE AND TEXT
items[2].style.fontWeight = 'bold'
items[2].style.backgroundColor = 'green'

//items.style.backgroundColor = 'grey'                        //THIS WILL THROUGH ERROR AS items IS AN ARRAY AND
                                                              //TO CHANGE ARRAY WE HAVE TO ITERATE THROUGH EACH
                                                              //AND EVERY ELEMENT OF THE
for (var i=0;i<items.length;i++){                             //ITERATING THROUGH EVERY ELEMENT OF ARRAY AND
    items[i].style.fontWeight = 'bold'                        //STYLING EVERY ELEMENT TO BOLD
}

//getElementsByTagName
var li = document.getElementsByTagName('li')                  //SELECTING li (Multiple elements)
console.log(li)
li[2].textContent = 'Hi'                                      //CHANGEING STYLE AND TEXT
li[2].style.fontWeight = 'bold'
li[2].style.backgroundColor = 'green'

for (var i=0;i<li.length;i++){                  //HERE WE ARE ITERATING THROUGH TAG INSTEAD OF CLASS, THEREFORE
    li[i].style.fontWeight = 'bold'             //THIS BOLD STYLE WILL BE ADDED TO 5th ELE. OF LIST ALSO, IF WE
}                                               //WOULD HAVE USED CLASS HERE THEN THE BOLD STYLE WOULDN'T BE  
                                                //APPLIED AS 5th ELE. AS 5th BELONGS TO LI TAG BUT NOT TO CLASS
//QUERY SELECTOR
var hd = document.querySelector('#main-header') //TO SELECT(ID,CLASS,TAG)WE USE(#,.,Normally) IN QUERY   
hd.style.borderBottom = 'solid 4px blue'                  

var ip = document.querySelector('input')        //THEIR ARE 2 INPUTS IN WEB PAGE, BUT QUERY SELECTOR CAN ONLY
ip.value = 'hello'                              //SELECT 1 ELEMENT, HENCE IT ALWAYS SELECT 1st ELEMENT.

var submit = document.querySelector('input[type="submit"]') //HERE, BY MENTIONING THE TYPE OF INPUT, WE ARE 
submit.value = 'send'                                       //SELECTING THE 2nd INPUT

var item = document.querySelector('.list-group-item')       //HERE, SINCE WE HAVE NOT MENTIONED WHICH ELEMENT TO 
item.style.color = 'brown'                                  //SELECT, HENCE IT WILL SELECT 1st ELEMENT OF LIST

var seconditem = document.querySelector                     
('.list-group-item:nth-child(2)')                           //HERE, WE ARE SELECTING 2nd ELEMENT OF LIST
seconditem.style.backgroundColor = 'green'

var thirditem = document.querySelector                     
('.list-group-item:nth-child(3)')                           //HERE, WE ARE SELECTING 3rd ELEMENT OF LIST
thirditem.style.visibility = 'hidden'

//QUERY SELECTOR ALL
var titles = document.querySelectorAll('.title')  //THEIR ARE 2 TITELS IN WEB PAGE THROUGH QURERYSELECTORALL
console.log(titles)                               //WE CAN SELECT BOTH AT ONCE

var odd = document.querySelectorAll
('li:nth-child(odd)')                             //SELECTING ALL THE ODD ELEMENTS OF LIST AT ONCE

for(var i=0;i<odd.length;i++){                 
    odd[i].style.backgroundColor = 'green' 
}                                                 //STYLING ALL THE ODD ELEMENTS AS GREEN

var sec = document.querySelectorAll
('li:nth-child(2)')                               //SELECTING THE 2nd ELEMENT OF LIST

for (var i=0;i<1;i++){
    sec[i].style.color = 'green'
}

//TRAVERSING IN DOM
var itemList = document.querySelector("#items")

    //PARENT NODE
console.log(itemList.parentNode)                  //ACCESSING PARENT NODE OF #items WHICH IS DIV 
itemList.parentNode.style.backgroundColor = 'red' //USING PARENT NODE AS SELECTOR & CHANGEING THE BG COLOR,HERE
                                                  //PARENT OF #items IS DIV, THEREFORE DIV BG COLOR WLL CHANGE
console.log(itemList.parentNode.parentNode)       //PARENT OF #items IS DIV, AND PARENT OF DIV IS DIV,HENCE O/P
                                                  //WILL BE DIV, WE CAN ADD PARENT LIKE THIS AS MUCH AS WE WANT
    //PARENT ELEMENT                                 
console.log(itemList.parentElement)               //PARENT NODE AND ELEMENT ARE EXACTLY SAME AND CAN BE USED 
                                                  //INTERCHANGEBLY

    //CHILD NODE
console.log(itemList.childNodes)                  //RETURNS CHILD OF #items, WHICH WILL BE LIST OF ITEMS, IN
                                                  //FORM OF ARRAY, BUT THIS ARRAY WILL ALSO CONTAIN TEXT AS ELE.
                                                  //AS IT CONSIDERS WHITE SPACE AS TEXT ELEMENT.
    //CHILDREN
console.log(itemList.children)                    //IT WILL ALSO RETURN #items CHILD, AND IT WON'T CONSIDER TEXT 
                                                  //AS ELEMENT, SO CONFUSION CAN AVOIDED AND IT'S BETTER TO USE
console.log(itemList.children[1]);                //SELECTING A PERTICULAR CHILD FROM ITEM LIST AND STYLEING
itemList.children[1].style.backgroundColor='blue' //IT'S BACKGROUND COLOR TO BLUE   

    //firstChild                                  //firstChild, lastChild, previousSibling and nextSibling ALSO 
    //lastChild                                   //HAVE SAME PROBLEM JUST AS CHILD NODE,SO INSTEAD OF RETURNING  
    //nextSibling                                 //1st, LAST, NEXT, PREVIOUS ELEMENT IT WILL RETURN TEXT SPACE
    //previousSibling                             //MOST OF THE TIME.

    //firstElementChild                           
console.log(itemList.firstElementChild)           //TO AVOID firstChild WE USE firstelementChild, IT WILL RETURN 
itemList.firstElementChild.textContent = 'H1'     //1st CHILD,HERE WE ARE CHANGEING THE VALUE OF 1ST CHILD TO H1
    
    //lastElementChild
console.log(itemList.lastElementChild)           //TO AVOID lastChild WE USE lastElementChild, IT WILL RETURN
itemList.lastElementChild.textContent = 'H5'     //LAST CHILD,HERE WE ARE CHAGEING THE VALUE OF LAST CHILD TO H5 

    //nextElementSibling
console.log(itemList.nextElementSibling)        //TO AVOID nextSibling WE USE nextElementSibling, IT WILL RETURN
                                                //NEXT SIBLING ELEMENT, HERE SINCE IT HAS NO NEXT SIBLING, HENCE 
                                                //IT'S SHOWING NULL
     //PreviousElementSibling
console.log(itemList.previousElementSibling)    //TO AVOID previousSibling WE USE previousElementSibling,IT WILL
                                                //RETURN PREVIOUS SIBLING ELEMENT
//CREATING ELEMENT
var newDiv = document.createElement('div')      //CREATING A NEW ELEMENT (DIV HERE)
newDiv.className = 'hello'                      //GIVING CLASS NAME TO THAT CREATED ELEMENT
newDiv.id = 'hello1'                            //GIVING ID TO THAT CREATED ELEMENT
newDiv.setAttribute('title','Hello Div')        //GIVING ATTRIBUTE TO THAT ELEMENT('attri. name','attri. value')

var newDivText = document.createTextNode
('HELLO WORLD')                                 //HERE WE ARE CREATING A TEXT NODE, AND THEN THIS TEXT NODE WILL 
                                                //BE ADDED IN CREATED ELEMENT

newDiv.appendChild(newDivText)                  //NOW THAT CREATED TEXT NODE IS ADDED TO CREATED ELEMENT

var c = document.querySelector('.container')    
var h1 = document.querySelector('h1')

c.insertBefore(newDiv,h1)                       //TILL NOW, ELE. HAS BEEN CREATED BUT NOT ADDED IN WEB PAGE, FOR
                                                //ADDING 1ST WE HAVE TO SELECT PLACE WHERE WE WANT THAT ELEMENT
                                                //TO GET ADD, HERE NEW ELE. WILL BE ADDED IN CONTAINER(c) AND IT
                                                //WILL BE ADDED BEFORE H1 (NOW HELLO WORLD, WILL BE VISISBLE IN 
                                                //WEB PAGE)

console.log(newDiv)                             //THIS WILL DISPLAY THE ELEMENT IN CONSOLE WHICH WE HAVE CREATED

var newDiv1 = document.createElement('div')                 //CREATING NEW DIV
var newDiv1Text = document.createTextNode('HELLO WORLD')    //CREATING TEXT NODE 
newDiv1.appendChild(newDiv1Text)                            //ADDING TEXT NODE IN CREATED DIV
var i = document.querySelector('#items')                       
var l = document.querySelector('.list-group-item')
i.insertBefore(newDiv1,l)                                   //HERE WE ARE ADDING HELLO WORLD BEFORE LIST 
