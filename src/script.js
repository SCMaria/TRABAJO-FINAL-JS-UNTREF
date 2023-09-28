

const productList = document.querySelector("#product-list");
let products = [];
const lista = async () => {
    productList.innerHTML = "";
    products = localStorage.getItem("products");


    if (products == null) {
        const response = await fetch("json/products.json");
        product = await response.json();

        localStorage.setItem("products", JSON.stringify(product));
  }
  if (typeof products == "string") {
    products = JSON.parse(products);
  }

};

lista();
let html = "";
if(lista){
    products.forEach(function(product,index) {
        html += '<div class="col-xs-12 col-md-6 bootstrap snippets bootdeys">' + 
                    '<div class="product-content product-wrap clearfix">' +
                        '<div class="row">' + 
                            '<div class="col-md-5 col-sm-12 col-xs-12">' +
                                '<div class="product-image">' + 
                                '<img src="'+ product.imagen +'" alt="194x228" height="228" class="img-responsive">' +
                                    '</span>' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-md-7 col-sm-12 col-xs-12">' +
                                '<div class="product-deatil">' +
                                    '<h5 class="name">' +
                                        '<a href="#">' +
                                            product.codigo +
                                        '</a>' +
                                    '</h5>' +
                                    '<p class="price-container">' +
                                        '<span>$'+ product.precio +'</span>' +
                                    '</p>' +
                                    '<span class="tag1"></span>' +
                                '</div>' +
                                '<div class="description">' +
                                    '<p>'+ product.descripcion +'</p>' +
                                '</div>' +
                                '<div class="product-info smart-form">' +
                                    '<div class="row">' +
                                        '<div class="col-md-6 col-sm-6 col-xs-6">' +
                                            '<a href="product.html" class="btn btn-success" onclick="saveId('+ index +')">Ver Detalle</a>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';

    });

    document.getElementById('section').innerHTML = html;
}

function saveId(id){
    window.localStorage.productClick = id;

}
