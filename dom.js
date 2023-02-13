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