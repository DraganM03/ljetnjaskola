let lista = document.getElementById("lista")

const fetchProducts = async () =>{

    try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        console.log(data)

        data.products.forEach(product => {

            var imageLink


            if(product.images[0]){
                imageLink = product.images[0]
            }else{
                imageLink = "https://placehold.jp/150x150.png"
            }


            lista.innerHTML+=`
            
            <div class="card">
            <div class="img_container">
                <div><img src="${imageLink}" alt="rip"></div>
            </div>
            <div class="text_container">
                <h1>${product.title}</h1  >
                <p>${product.description}</p>
            </div>

            </div>
            
            
            `
        });

    } catch (error) {
        console.log("greska" + error)
    }

}

fetchProducts()