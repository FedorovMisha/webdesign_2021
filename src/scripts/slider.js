let sliderArea = document.getElementById("slider__area");
let timeOutObj = null;
window.isDevelopment = false;

const images = window.isDevelopment ?  [
    "../../public/Images/Slider0.png",
    "../../public/Images/Slider1.png",
    "../../public/Images/Slider2.png",
    "../../public/Images/Slider3.png",
    "../../public/Images/Slider4.png",
] : [
    "https://fedorovmisha.github.io/webdesign_2021/public/Images/Slider0.png",
    "https://fedorovmisha.github.io/webdesign_2021/public/Images/Slider1.png",
    "https://fedorovmisha.github.io/webdesign_2021/public/Images/Slider2.png",
    "https://fedorovmisha.github.io/webdesign_2021/public/Images/Slider3.png",
    "https://fedorovmisha.github.io/webdesign_2021/public/Images/Slider4.png",
]

let current = 0;
let currentImage = images[0];
let animationName = "swipe__slide";

const swipeRight = () => {
    if (t === 0) {
        console.log(currentImage + " " + window.isDevelopment);
        document.getElementById("slider__area").classList.remove("swipe__slide");
        current = (current + 1) % images.length;
        currentImage = images[current];
        window.requestAnimationFrame(function(time){
            window.requestAnimationFrame(function(time){
                document.getElementById("slider__area").classList.add("swipe__slide");
            })
        });
        t = setTimeout(() => {
            sliderArea.src = currentImage;
            t = 0;
        }, 1000);
    }

};

const swipeLeft = () => {

    if (t === 0) {
        document.getElementById("slider__area").classList.remove("swipe__slide");
        current = (current - 1) % images.length;
        
        if(current < 0)
            current = images.length - 1;
    
        

        currentImage = images[current];
        console.log(current + " " + currentImage);
        window.requestAnimationFrame(function(time){
            window.requestAnimationFrame(function(time){
                document.getElementById("slider__area").classList.add("swipe__slide");
            })
        });
        t = setTimeout(() => {
            sliderArea.src = currentImage;
            t = 0;
        }, 1000);
    }
};

sliderArea.src = currentImage;
document.querySelector("#l_arrow").addEventListener("click", swipeLeft, false);
document.querySelector("#r_arrow").addEventListener("click", swipeRight, false);


setInterval(() =>{
    if(t == 0)
    {
        swipeRight();
    }
}, 20000);


