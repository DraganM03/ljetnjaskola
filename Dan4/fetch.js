let lista = document.getElementById("lista")

const fetchProducts = () =>{
    fetch('https://dummyjson.com/products').then(response => response.json()).then((data) => {
    
    data.products.forEach(product => {
        let item = document.createElement("li")
        item.innerText = product.title
        lista.appendChild(item)
    });
    
    console.log(data.products)})
}

fetchProducts()