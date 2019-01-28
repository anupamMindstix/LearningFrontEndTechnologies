
var interval; // 2 seconds
var i = 0;
var imageArraylength = new Number();
var imageArr = [];
// var operation = new String();
var switcher;
var autoSlide = true;
var swipeAnimationStrategy;
var slideOrientation;
var loopValue;
var leftNav;
var rightNav;

function Carousel(imageArray, loop, autoSlideTimeInterval, swipeAnimation, orientation, leftNavButton, rightNavButton, homeButtonURL) {
    imageArr = JSON.parse(JSON.stringify(imageArray));
    imageArraylength = imageArray.length;
    console.log("the value of loop in the carousel is :", loop);
    if (autoSlideTimeInterval == 0) {
        autoSlide = false;
    }
    interval = autoSlideTimeInterval;
    swipeAnimationStrategy = swipeAnimation;
    slideOrientation = orientation;

    loopValue = loop;

    $('#leftArrow').attr('src', leftNavButton);
    $('#rightArrow').attr('src', rightNavButton);
    $('#home').attr('href', homeButtonURL);
    this.display = display();
    console.log('interval in constructor...' + interval);

}

$('#btn').bind('click', function (event) {
    if ($('#btn').attr('value') == 'disable_loop') {
        console.log("autoSlide disabled");
        clearInterval(switcher);
        autoSlide = false;
        $('#btn').attr('value', 'start_loop');
    } else {
        if ($('#btn').attr('value') == 'start_loop') {
            autoSlide = true;
            console.log("autoSlide enabled");
            changeImage();
            switcher = setInterval(function () {
                i++;
                changeImage();
            }, interval);
            $('#btn').attr('value', 'disable_loop');
        }
    }
}
);


$('#left').bind("click", function (event) {
    console.log("prev is clicked");
    console.log('interval in left click...' + interval)
    i--;
    console.log("prev is clicked the value of i :", i);
    if (autoSlide) {
        clearInterval(switcher);
        changeImage();
        switcher = setInterval(function () {
            i++;
            changeImage();
        }, interval);
    } else {
        changeImage();
    }
});

$('#right').bind("click", function (event) {
    console.log("next is clicked");
    i++;
    if (autoSlide) {
        clearInterval(switcher);
        changeImage();
        switcher = setInterval(function () {
            i++;
            changeImage();
        }, interval);
    } else {
        changeImage();
    }
});

function display() {
    console.log("the value of interval is :" + interval);
    changeImage();
    var imgUrl = imageArr[i].FHD_ImageUrl;
    $('#currentImg').attr('src', imgUrl);
    if (autoSlide) {
        switcher = setInterval(function () {
            i++;
            changeImage();
        }, interval);
    }
}

function changeImage() {

    // if(operation == "prev"){
    //     
    // }
    console.log("the value of loop in the change Imamge function is: ", loopValue);
    if (i >= imageArraylength) {
        if (loopValue) {
            i = 0;
        }
        else {
            i = imageArraylength - 1;
        }
    }
    if (i < 0) {
        if (loopValue) {
            i = imageArraylength - 1
        } else {
            i = 0;
        }
    }
    if (i >= 0 && i <= imageArraylength - 1) {
        console.log("the value of the autoSlide here is :", autoSlide);
        if ((autoSlide == true)&&(i <=0 ) &&(loopValue == false)) {
            $('#left').hide();
            $('#right').show();
        } else {
            if((autoSlide == true)&&(i >= imageArraylength - 1 ) &&(loopValue == false)){
                $('#left').show();
                $('#right').hide(); 
            
            } else{
                   if ((i <= 0) && (loopValue == false)) {
                  console.log("hiding the leftArrow and showing the right arrow");
                 $('#left').hide();
                 $('#right').show();
            }else {
                if ((i >= imageArraylength - 1) && ((loopValue == false))) {
                    console.log("hiding the rightArrow and showing the left arrow");
                    $('#left').show();
                    $('#right').hide();
                } else {
                    console.log("showing both the arrows");
                    $('#left').show();
                    $('#right').show();
                }
            }
        }

    }
    }
    console.log("the value of i : ", i);
    var imgUrl = imageArr[i].FHD_ImageUrl;
    // console.log("the image Url is :", imgUrl, typeof imgUrl);
    // $('#currentImg').animate({left:'200px'},0)
    // if(i > 0){
    //     imageArr[i-1].FHD_ImageUrl;
    //     $('#prevImg').attr('src', imgUrl);
    //     $('#prevImg').hide();
    // }
    // if(i < imageArraylength){
    //     $('#nextImg').attr('src', imgUrl);
    //     $('#nextImg').hide();
    // }
    //$("#currentImg").animate({opacity: "0"});
    $('#currentImg').attr('src', imgUrl);
    //$("#currentImg").animate({opacity: "1"},4000);
    //$('#currentImg').slideUp();
    // $('#currentImg').animate({left:'10px'},5000)

    // i++;
    //console.log("switcher >>>", switcher);

}

