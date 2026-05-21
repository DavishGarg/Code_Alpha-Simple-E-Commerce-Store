const productContainer = document.getElementById('productContainer');

async function getProducts() {

    try {

        const response = await fetch('http://localhost:5000/api/products');

        const products = await response.json();

        console.log(products);

        products.forEach((product) => {

            const productCard = `
            
                <div class="card">

                    <img src="${product.image}" />

                    <h3>${product.name}</h3>

                    <p>₹${product.price}</p>

                    <button onclick='viewProduct(${JSON.stringify(product)})'>
                        View
                    </button>

                    <button onclick='addToCart(${JSON.stringify(product)})'>
                        Add To Cart
                    </button>

                </div>
            
            `;

            productContainer.innerHTML += productCard;
        });

    } catch(error) {

        console.log(error);
    }
}

function addToCart(product){

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Product Added To Cart');
}

function viewProduct(product){

    localStorage.setItem('selectedProduct', JSON.stringify(product));

    window.location.href = 'product.html';
}

getProducts();