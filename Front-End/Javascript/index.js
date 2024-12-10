
const images = ['../images/slider1.jpg', '../images/slider2.jpg', '../images/slider3.jpg', '../images/slider4.jpg', '../images/slider5.jpg', '../images/slider6.jpg'];

const sliderTime = 3000;
let sliderIndex = 0;

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

function sliderImagesChange(){

    const imagesContainer = document.getElementById('headerImagesSlider')
    imagesContainer.innerHTML = `<img src="${images[sliderIndex]}">`
    if(sliderIndex < images.length -1){ // 0 1
        sliderIndex ++
        
    }else{
        sliderIndex = 0
    }
}
sliderImagesChange()
setInterval(sliderImagesChange, sliderTime);