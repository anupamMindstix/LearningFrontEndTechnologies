// var carousel = document.getElementById('myCarousel');

var switcher;
var noOfSlides = new Number(); 
//var slideArray = $(".slide");
 //var interval = 5000; // 2 seconds

function carouselHide(num) {
    var slideArray = $(".slide")
   // indicators[num].setAttribute('data-state', '');
   if(slideArray.length>0){
   $(slideArray[num]).attr('data-state', "");
   // slides[num].setAttribute('data-state', "");

   slideArray[num].style.opacity=0;
   }
}

function carouselShow(num) {
    // indicators[num].checked = true;
    // indicators[num].setAttribute('data-state', 'active');
    var slideArray = $(".slide");
    if(slideArray.length>0){
    console.log("slideArray: " + slideArray.length);
    $(slideArray[num]).attr('data-state', "active");

    //$("[data-state=active]").show();
    slideArray[num].style.opacity=1;
    }
    // clearInterval(switcher);
}

// function setSlide(slide) {
//     return function() {
//         // Reset all slides
//         for (var i = 0; i < noOfSlides; i++) {
//          //   indicators[i].setAttribute('data-state', '');
//             slides[i].setAttribute('data-state', '');
            
//             carouselHide(i);
//         }

//         // Set defined slide as active
//       //  indicators[slide].setAttribute('data-state', 'active');
//         slides[slide].setAttribute('data-state', 'active');
//         carouselShow(slide);

//         // Stop the auto-switcher
//         clearInterval(switcher);
//     };
// }

function switchSlide(noOfSlides) {
    var nextSlide = 0;
   var slideArray = $(".slide");
    // Reset all slides
    // for (var i = 0; i <noOfSlides; i++) {
    //     // If current slide is active & NOT equal to last slide then increment nextSlide
    //     if ((indicators[i].getAttribute('data-state') == 'active') && (i !== (indicators.length-1))) {
    //         nextSlide = i + 1;
    //     }

    for (var i = 0; i <= noOfSlides; i++) {
        // If current slide is active & NOT equal to last slide then increment nextSlide
        if ( ($(slideArray[i]).attr('data-state')=="active")&& (i !== (noOfSlides + 1))) {
            nextSlide = i + 1;
        }
        // Remove all active states & hide
        carouselHide(i);
    }

//     // Set next slide as active & show the next slide
    carouselShow(nextSlide);
}

// if (carousel) {
//     var slides = carousel.querySelectorAll('.slide');
//     alert(slides.toString);
//     var indicators = carousel.querySelectorAll('.indicator');
//     alert(indicators);
//     var switcher = setInterval(function() {
//         switchSlide();
//     }, speed);

//     for (var i = 0; i < indicators.length; i++) {
//         indicators[i].addEventListener("click", setSlide(i));
//     }
// }

var interval = 5000; // 2 seconds

function Carousel(imageArray) {

    this.noOfSlides = imageArray.length -1 ;
    this.display = display(imageArray);
  
    
}

function display(imageArray){

    //alert("i m at display function")
    for (var i = 0; i < imageArray.length; i++) {
        var imgUrl = imageArray[i].FHD_ImageUrl;
        var temp =  '<div id="' + i + '" class="slide " data-state = "">'+
              '<img class="d-block img-fluid" src="'+ imgUrl+'" >'+
        '</div>';
        $('#slides').append(temp);
         
    }

   
   //carouselShow(0);

    switcher = setInterval(function() {
        switchSlide(noOfSlides);
    }, interval);
    
}

// function displaySlides(imageArray){
    
//     for (var i = 0; i < imageArray.length; i++) {
//               var imgUrl = imageArray[i].FHD_ImageUrl;
//               var temp =  '<div class="slide">'+
//                     '<img class="d-block img-fluid" src="'+ imgUrl+'" >'+
//               '</div>';
//               $(temp).insertAfter('#myCarousel');

               
//          }
//          clearInterval();
// }