// Initialize when document ready
$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })
});

// Creating the active class on the buttons for the Latest work section

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for(let i = 0; i<filterButtons.length; i++){
    filterButtons[i].addEventListener("click",function(){
        for (let j = 0; j < filterButtons.length; j++){
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for(let k = 0; k < items.length; k++){
            items[k].style.display = "none";
            if(target===items[k].getAttribute("data-id"))
            {
                items[k].style.display = "block";
            }
            if(target==="all") {
                items[k].style.display = "block";
            }
        }
    })
} 

// Declaring Variables and Consts
const closeLightbox = document.querySelector(".close-lightbox");
let lightbox = document.querySelector(".lightbox");
let lightboxImage = document.querySelector("img")
const gallery = document.querySelector(".portfolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");


// Closing lightbox from clicking outside of the image
lightbox.addEventListener("click",function(){
    event.stopPropagation();
    event.preventDefault();
    lightboxImage = "";
    if(event.target != lightboxImage) {
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    }
})

// Creating funtion for the close of the lightbox clicking on the X
closeLightbox.addEventListener("click",function(){
        event.preventDefault();
        event.stopPropagation();
        
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
})

// When clicking on the plus icon, show the lightbox
galleryItem.forEach(function(element){
    
    element.querySelector(".fa-plus").addEventListener("click", function(){
        event.preventDefault();
        event.stopPropagation();
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
        // changing the image source on every different img
        portfolios = element.querySelector("img").getAttribute("src");
       
        let newImg = document.createElement("img")
        newImg.setAttribute("src",portfolios)
        lightbox.append(newImg)
        return(lightbox)
    })
})


