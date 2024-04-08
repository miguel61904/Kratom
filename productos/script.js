const products = [
    {
        name: "Product 1",
        description: "Description of product 1",
        image: "https://www.tmc.edu/news/wp-content/uploads/sites/2/2019/08/20190613_kratom_203.jpg",
        price: "$10",
        cat: 1
    },
    {
        name: "Product 2",
        description: "Description of product 2",
        image: "https://emeraldislehealthandrecovery.com/wp-content/uploads/2023/03/kratom.webp",
        price: "$20",
        cat: 2
    },
    {
        name: "Product 3",
        description: "Description of product 3",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2023-07/230731-kratom-leaves-se-441p-2eb0c5.jpg",
        price: "$30",
        cat: 3
    },
    {
        name: "Product 4",
        description: "Description of product 4",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2023-07/230731-kratom-leaves-se-441p-2eb0c5.jpg",
        price: "$80",
        cat: "1"
    },
    {
        name: "Product 5",
        description: "Description of product 5",
        image: "https://www.tmc.edu/news/wp-content/uploads/sites/2/2019/08/20190613_kratom_203.jpg",
        price: "$50",
        cat: "1"
    },
];


let cat1 = document.getElementById("cat1")
let cat2 = document.getElementById("cat2")
let cat3 = document.getElementById("cat3")
const catalog = document.getElementById("catalog");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("catalog-card");
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <button class="buy-button" data-product="${product.name}" data-price="${product.price}">Buy Now</button>
    `;
    catalog.appendChild(card);
});

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("buy-button")) {
        const productName = event.target.getAttribute("data-product");
        const productPrice = event.target.getAttribute("data-price");
        // Aquí puedes agregar la lógica para agregar el producto al carrito de compras
        console.log(`Producto añadido al carrito: ${productName} - Precio: ${productPrice}`);
    }
});

//botones de categoria
let i = 0;
cat1.addEventListener("click", ()=>{
    catalog.style.display = "none"
    for(let i = 0; i <=products.length; i++){
        if(products[i].cat == 1){
            const card = document.createElement("div");
            card.classList.add("catalog-card");
            card.innerHTML = `
        <img src="${products[i].image}" alt="${products[i].name}">
        <h2>${products[i].name}</h2>
        <p>${products[i].description}</p>
        <p>${products[i].price}</p>
        <button class="buy-button" data-product="${products[i].name}" data-price="${products[i].price}">Buy Now</button>
    `;
    catalog.appendChild(card);
        }else{
            console.log("no hay productos en la categoria")
        }
    }
    catalog.style.display = "flex"
})
