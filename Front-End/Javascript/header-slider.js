
const headerImagesSlider = document.getElementById('headerImagesSlider')
let sliderIndex = 0;
let sliderTime = 3000


function imagesData(){
    fetch('../../Back-End/Data/slider-images.json')
    .then(res => res.json())
    .then(data => {
        const images = data
        
        function sliderImagesChange(){
            headerImagesSlider.innerHTML = `<img src="${images[sliderIndex].img}">`
            if(sliderIndex < images.length -1){
                sliderIndex ++
            }else{
                sliderIndex = 0;
            }

        }

        sliderImagesChange()
        setInterval(sliderImagesChange, sliderTime)
    })

}
imagesData()

