
// Globals
const productsDisplay = document.getElementById('products')
let allProducts = []

window.onload = () => {
    main()

    // default calls 
    getData()
}

function main(){

    //DOM References
    const largeDeviceSearchBox = document.getElementById('largeDeviceSearchBox')
    const smallDeviceSearchBox = document.getElementById('smallDeviceSearchBox')
    


    //Event Listener
    largeDeviceSearchBox.addEventListener('submit', (event) => handleSearchResult(event))
    smallDeviceSearchBox.addEventListener('submit', (event) => handleSearchResult(event))

} // End

// Handle Event Listener
function handleSearchResult(event){
    event.preventDefault()
    const searchVale = event.target.searchBox.value.toLowerCase()
    
    const searchResults = allProducts.filter((product) => {

        const productTitle = product.title.toLowerCase()
        return productTitle.includes(searchVale)
        
    })
    searchProductsDisplay(searchResults)
}


// DOM function

/**
 * fetching data display in home page dynamically
 * @param {Object} product 
 */
function dynamicProducts(product){
    const {category, description, id, image, price, rating, title} = product
    
    const shortTitle = title.slice(0, 30) + '...'
    const star = rating.rate
    const review = rating.count


    productsDisplay.innerHTML += `

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



//Units Function

/**
 * api data fetching
 */
async function getData(){
    const url = 'https://fakestoreapi.com/products'
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        const products = await data
        productsDisplay.innerHTML = '';
        products.forEach((product) => {
            allProducts = products
            dynamicProducts(product)
        })
       
    }catch(error){
        console.error("Error fetching data", error.message)
    }
}

function searchProductsDisplay(searchResults){
    productsDisplay.innerHTML = '';
    searchResults.forEach((product) => {
        dynamicProducts(product)
    })
}