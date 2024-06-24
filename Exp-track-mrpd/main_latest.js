var Form = document.getElementById('my-form')
Form.addEventListener('submit', AddItem)

function loaddata(){
    axios.get("https://crudcrud.com/api/2b89cd13753c4d98b009c151668a91b2/Data")
        .then((response) => {
            const itemList = document.getElementById("list-main")
            itemList.innerHTML = ""

            response.data.forEach((item) => {
                const listItem = document.createElement("li")
                listItem.textContent =`${item.Itemname}  ${item.Itemdescription}  ${item.ItemPrice}  ${item.Itemquantity}`

                itemList.appendChild(listItem)

                var buy = document.createElement('button')
                buy.classList.add('btn')
                buy.appendChild(document.createTextNode('Buy'))
                buy.onclick = () => buyItem(item)
                
                itemList.appendChild(buy)
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

window.onload = function (){
    loaddata()
}

function AddItem(e) {
    e.preventDefault()

    var name = document.getElementById('Item-name').value
    var description = document.getElementById('Descrp').value
    var price = document.getElementById('Price').value
    var quantity = document.getElementById('Quantity').value

    let item = {
        Itemname: name,
        Itemdescription: description,
        ItemPrice: price,
        Itemquantity: quantity
    }

    axios.post("https://crudcrud.com/api/2b89cd13753c4d98b009c151668a91b2/Data", item)
        .then((response) => {
            console.log(response)
            loaddata()
        })
        .catch((err) => {
            console.log(err)
        })
}

function buyItem(item) {
    const newQuantity = item.Itemquantity - 1
    const UpdatedItem = {
        Itemname: item.Itemname,
        Itemdescription: item.Itemdescription,
        ItemPrice: item.ItemPrice,
        Itemquantity: newQuantity
    }

    axios.put(`https://crudcrud.com/api/2b89cd13753c4d98b009c151668a91b2/Data/${item._id}`, UpdatedItem)
        .then(() => {
            loaddata();
        })
        .catch((error) => {
            console.log(error);
        });
}






