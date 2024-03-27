const products = [
    {
        name: "Product 1",
        description: "Description of product 1",
        image: "https://www.tmc.edu/news/wp-content/uploads/sites/2/2019/08/20190613_kratom_203.jpg",
        price: "$10"
    },
    {
        name: "Product 2",
        description: "Description of product 2",
        image: "https://emeraldislehealthandrecovery.com/wp-content/uploads/2023/03/kratom.webp",
        price: "$20"
    },
    {
        name: "Product 3",
        description: "Description of product 3",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2023-07/230731-kratom-leaves-se-441p-2eb0c5.jpg",
        price: "$30"
    },
    {
        name: "Product 4",
        description: "Description of product 4",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2023-07/230731-kratom-leaves-se-441p-2eb0c5.jpg",
        price: "$80"
    },
    {
        name: "Product 5",
        description: "Description of product 5",
        image: "https://www.tmc.edu/news/wp-content/uploads/sites/2/2019/08/20190613_kratom_203.jpg",
        price: "$50"
    },
];

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