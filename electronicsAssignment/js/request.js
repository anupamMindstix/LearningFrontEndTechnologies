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
client.get(electronicsUrl, function (response) {
     var responseJson = JSON.parse(response);
     var imageArray = responseJson.payload.multiple;
     //alert(imageArray[0].FHD_ImageUrl)
    // alert(imageArray);
     //console.log(response);
var carousel = new Carousel(imageArray);
carousel.display;
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
