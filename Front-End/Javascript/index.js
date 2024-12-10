
const productsContainer = document.getElementById('products')

const productApi = fetch('https://fakestoreapi.com/products')
productApi
.then(res => res.json())
.then(data => {

    const products = data;
    productsContainer.innerHTML = '';
    products.forEach((product) => {
        productsArray(product)
    })
})

function productsArray(product){
    const {id, image, category, description, price, title} = product
    const shortTitle = title.slice(0, 25) + '...';
    const star = product.rating.rate
    const review = product.rating.count
    
    productsContainer.innerHTML += `
    
    <div class="product">
    <img src="${image}" alt="">
    <h4>${shortTitle}</h4>
    <div class="rating">
        <div class="star"><i class="fa-solid fa-star"></i><span>${star}</span></div>
        <div class="review"><span>${review} Reviews</span></div>
    </div>
    <span>$${price}</span>
    </div>
    `
}
