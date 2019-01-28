var HttpClient = function () {
     this.get = function (aUrl, aCallback) {
          var anHttpRequest = new XMLHttpRequest();
          anHttpRequest.onreadystatechange = function () {
               if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
          }
          anHttpRequest.open("GET", aUrl, true);
          anHttpRequest.send();
     }
}


var electronicsUrl = 'https://ecom-anupam.firebaseio.com/images.json';
var client = new HttpClient();
//var loop;
client.get(electronicsUrl, function (response) {
     //alert("the response from the server is :", response);
     var responseJson = JSON.parse(response);
     var imageArray = responseJson.payload.multiple;
     var loop = responseJson.payload.brandingInfo.loop;
     var autoSlideTimeInterval = responseJson.payload.brandingInfo.autoSlideTimeInSec;
     autoSlideTimeInterval = (autoSlideTimeInterval) * 1000;
     var leftNavButton = responseJson.payload.brandingInfo.navigationButtonURL.prevNavigationImageUrl;
     var rightNavButton = responseJson.payload.brandingInfo.navigationButtonURL.nextNavigationImageUrl; 
     var swipeAnimation = responseJson.payload.brandingInfo.swipeAnimation;
     var backgroundColor = responseJson.payload.brandingInfo.backgroundColour;
     var homeButtonURL = responseJson.payload.brandingInfo.homeButtonImageURL;
     var orientation = responseJson.payload.brandingInfo.orientation;

     //alert(imageArray[0].FHD_ImageUrl)
     //  alert(imageArray);
     // alert ("the value of the loop : " +  loop);

     //console.log(response);
     //  var carousel = new Carousel(imageArray,loop)
     if ((imageArray.length > 0) && (loop != null) && (autoSlideTimeInterval != null )&&(swipeAnimation != null) && (orientation != null) && (rightNavButton != null) && (leftNavButton != null) && (homeButtonURL != null)) {
         console.log("the image array length is :",imageArray.length);
         console.log("the value of loop  is :",loop);
         console.log("the value of autoSlideTimeInterval is:",autoSlideTimeInterval);
         console.log("the value of swipe animation is:",swipeAnimation);
         console.log("the value of orientation  is:",orientation );
          var carousel = new Carousel(imageArray, loop,  autoSlideTimeInterval, swipeAnimation, orientation,leftNavButton,rightNavButton,homeButtonURL);
          carousel.display;
     }
     // alert("the lenth of the image Array is :", imageArray.length );
     //alert("the value of the loop is : ", loop);
     //  for (var i = 0; i < imageArray.length; i++) {
     //       var imgUrl = imageArray[i].FHD_ImageUrl;
     //      //  var description = responseForElectronics[i].description;
     //      //  var name = responseForElectronics[i].productName;
     //      //  var price = responseForElectronics[i].price;
     //      //  var rating = responseForElectronics[i].rating;
     //      //  var electronicProduct = new ElectronicProduct(name, imgUrl,price,rating,description);
     //      // electronicProduct.display();

     //  }

});

// $.ajax({
//      url: "https://ecom-anupam.firebaseio.com/products/Electronics.json",
//      data: {
//           format: 'json'
//        },
//      success: function(data){
//           alert(data);
//           // var responseForElectronics = JSON.parse(response); 
//           // for (var i = 0; i < responseForElectronics.length; i++) {
//           //      var imgUrl = responseForElectronics[i].imageUrl;
//           //      var description = responseForElectronics[i].description;
//           //      var name = responseForElectronics[i].productName;
//           //      var price = responseForElectronics[i].price;
//           //      var rating = responseForElectronics[i].rating;
//           //      var electronicProduct = new ElectronicProduct(name, imgUrl,price,rating,description);
//           //     electronicProduct.display();
//           // }

//      }
//    });

//    $.ajax({
//      url: 'https://ecom-anupam.firebaseio.com/images.json',
//      dataType: 'jsonp',
//      success: function( responseForimages) {

//       for (var i = 0; i < responseForElectronics.length; i++) {
//            var imgUrl = responseForElectronics[i].imageUrl;
//            var description = responseForElectronics[i].description;
//            var name = responseForElectronics[i].productName;
//            var price = responseForElectronics[i].price;
//            var rating = responseForElectronics[i].rating;
//            var electronicProduct = new ElectronicProduct(name, imgUrl,price,rating,description);
//           electronicProduct.display();
//       }
//      },
//      type: 'GET'
//   });
