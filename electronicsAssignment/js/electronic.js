var productName = new String();
var imgUrl = new String();
var productPrice = new String();
var rating = new Number();
var productDescription = new String();

function ElectronicProduct(productName,imgUrl,productPrice,rating,productDescription) {

     this.productName = productName;
     this.imgUrl = imgUrl;
     this.productPrice = productPrice;
     this.rating = rating;
     this.productDescription = productDescription;
     //alert( imgUrl)
     this.display = display;
     
}

function display(){
      var temp = '<div class="card mt-4 column">' +
            '<img class="card-img-top img-fluid" id = "img_Url" src= '+this.imgUrl +'> </img>' +
            '<div class="card-body">' +
            '<h3 class="card-title" id = "productName"> '+this.productName +'</h3>' +
            '<h4 id = "productPrice">'+this.productPrice +'</h4>' +
            '<p class="card-text" id = "productDescription">'+this.productDescription +'</p>' +
            '<span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span> 4.0 stars' +
            '</div>';
        $('#main-objects').append(temp);

}